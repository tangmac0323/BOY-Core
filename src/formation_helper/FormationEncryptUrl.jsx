import { sql } from '@vercel/postgres';
import { useState } from 'react';

// hooks
import useFormation from '@src/formation_helper/useFormation';

// utils
import { decryptObject, encryptObject, generateHash } from '@src/crypto/Utils';

export const retrieveSetupFromDatabase = async ({
  hashedSetupCode,
  resetForm,
}) => {
  console.log('GETTING DATA FROM DATABASE');
  // get the code from the database
  const { rows } =
    await sql`SELECT * FROM hashed_formation_setup WHERE hashed_setup_code = ${hashedSetupCode};`;

  console.log('ROWS:', rows);
  // check the length of the rows
  if (rows.length === 0) {
    return;
  }

  // get the first one in the rows
  const row = rows[0];

  console.log('row:', row);

  // get the encrypted setup code
  const encryptedSetupCode = row.encrypted_setup_code;

  console.log('encryptedSetupCode:', encryptedSetupCode);

  // decrypt the code first
  const decryptedSetupCode = decryptObject(encryptedSetupCode);

  console.log('decryptedSetupCode:', decryptedSetupCode);

  console.log('retrieveSetupFromDatabase - load data from hash code');
  resetForm(decryptedSetupCode);
};

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

    await sql`INSERT INTO hashed_formation_setup (hashed_setup_code, encrypted_setup_code) 
                VALUES (${hashBuffer}, ${encryptedFormValues}) 
                ON CONFLICT (hashed_setup_code) DO UPDATE
                SET encrypted_setup_code=${encryptedFormValues}`;

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
