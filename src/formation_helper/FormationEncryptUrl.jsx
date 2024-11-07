// import { sql } from '@vercel/postgres';
import { useState } from 'react';

// hooks
import useFormation from '@src/formation_helper/useFormation';

// utils
import { encryptObject, decryptObject, generateHash } from '@src/crypto/Utils';

const writeHashedSetup = async ({ hashBuffer, encryptedFormValues }) => {
  console.log(`writeHashedSetup - start`);
  fetch('/api/writesetup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ hashBuffer, encryptedFormValues }),
  }).then((response) => {
    console.log(`writeHashedSetup - get data: ${response.json()}`);

    if (!response.ok) {
      throw new Error(`writeHashedSetup - Network response was not ok, with response: ${response.json()}`);
    }

    return response.json(); // Parse the response JSON
  }).then((data) => {
      console.log('writeHashedSetup - get data: ', data);
  });

  // TODO: add following process logic

  // const data = await response.json();
  // console.log('writeHashedSetup - get data: ', data);
};

export const retrieveHashedSetup = async ({ hashedSetupCode, resetForm }) => {
  console.log('retrieveHashedSetup - start process: ', hashedSetupCode);

  if (!hashedSetupCode) {
    return;
  }
  const params = new URLSearchParams({
    hashedSetupCode,
  });

  fetch(`/api/readsetup?${params}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('retrieveHashedSetup - Network response was not ok');
      }

      return response.json(); // Parse the response JSON
    })
    .then((data) => {
      console.log('retrieveHashedSetup - get response data: ', data);
      // get the encrypted setup code
      const { encryptedSetupCode } = data;

      if (!encryptedSetupCode) {
        console.log(
          'retrieveHashedSetup - No encrypted setup code found in the database with hashedSetupCode',
          hashedSetupCode
        );
        return;
      }

      // decrypt the code first
      const decryptedSetupCode = decryptObject(encryptedSetupCode);

      // reset the form with the decrypted state
      resetForm(decryptedSetupCode);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
};

// export const retrieveSetupFromDatabase = async ({
//   hashedSetupCode,
//   resetForm,
// }) => {
//   console.log('GETTING DATA FROM DATABASE');
//   // get the code from the database
//   const { rows } =
//     await sql`SELECT * FROM hashed_formation_setup WHERE hashed_setup_code = ${hashedSetupCode};`;

//   console.log('ROWS:', rows);
//   // check the length of the rows
//   if (rows.length === 0) {
//     return;
//   }

//   // get the first one in the rows
//   const row = rows[0];

//   console.log('row:', row);

//   // get the encrypted setup code
//   const encryptedSetupCode = row.encrypted_setup_code;

//   console.log('encryptedSetupCode:', encryptedSetupCode);

//   // decrypt the code first
//   const decryptedSetupCode = decryptObject(encryptedSetupCode);

//   console.log('decryptedSetupCode:', decryptedSetupCode);

//   console.log('retrieveSetupFromDatabase - load data from hash code');
//   resetForm(decryptedSetupCode);
// };

const FormationEncryptUrl = ({ baseURL, encryptedUrl, setEncryptedUrl }) => {
  const { watchForm } = useFormation();

  // we need to hash the setupCode

  // Function to copy the URL to the clipboard
  const generateShareLink = async () => {
    // encrypt formState
    const formValues = watchForm();

    const encryptedFormValues = encryptObject(formValues);

    // hash the value
    const hashBuffer = await generateHash(encryptedFormValues);

    //  update the database with the hashed setup code
    await writeHashedSetup({ hashBuffer, encryptedFormValues });

    // await sql`INSERT INTO hashed_formation_setup (hashed_setup_code, encrypted_setup_code)
    //             VALUES (${hashBuffer}, ${encryptedFormValues})
    //             ON CONFLICT (hashed_setup_code) DO UPDATE
    //             SET encrypted_setup_code=${encryptedFormValues}`;

    const completeUrl = baseURL + `?setupcode=${hashBuffer}`;

    navigator.clipboard
      .writeText(completeUrl)
      .then(() => {
        setEncryptedUrl(completeUrl);
        alert('URL copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy: ', error);
      });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
      <button
        type="button"
        style={{
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          padding: '10px',
        }}
        onClick={generateShareLink}
      >
        Generate Share Link
      </button>
      <p
        style={{
          width: '80%',
          fontSize: '16px',
          wordBreak: 'break-all',
          padding: '10px', // Add padding for height
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginRight: '10px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {encryptedUrl}
      </p>
    </div>
  );
};

export default FormationEncryptUrl;
