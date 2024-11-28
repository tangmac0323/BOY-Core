import { useEffect, useState } from 'react';

// css
import './FormationEncryptUrl.css';

// hooks
import useFormation from '@src/formation_helper/useFormation';
import CustomizedModal, {
  useCustomizedModal,
} from './shared/CustomizedModal/CustomizedModal';

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
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`writeHashedSetup - Network response was not ok`);
      }
      return response.json(); // Parse the response JSON
    })
    .then((data) => {
      // console.log('writeHashedSetup - get data: ', data);
    })
    .catch((error) => {
      console.error('writeHashedSetup - Error:', error);
    });

  // TODO: add following process logic

  // const data = await response.json();
  // console.log('writeHashedSetup - get data: ', data);
};

// NOTE: following is in prod
export const retrieveHashedSetup = async ({
  hashedSetupCode,
  resetForm,
  setIsLoading,
}) => {
  setIsLoading(true);
  console.log('retrieveHashedSetup - start process: ', hashedSetupCode);

  if (!hashedSetupCode) {
    setIsLoading(false);
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

      return response.json();
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
      setIsLoading(false);
      resetForm(decryptedSetupCode);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
};

// export const retrieveHashedSetup = async ({
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

const SetupCodeInputModal = ({ inputSetupCode, setInputSetupCode }) => {
  return (
    <input
      type="text"
      placeholder="输入分享码"
      value={inputSetupCode}
      onChange={(e) => setInputSetupCode(e.target.value)}
    />
  );
};

const FormationEncryptedCode = ({
  encryptedSetupCode,
  setEncryptedSetupCode,
}) => {
  const { watchForm } = useFormation();

  const [inputSetupCode, setInputSetupCode] = useState('');
  const { open, openModal, closeModal } = useCustomizedModal();

  // we need to hash the setupCode

  // Function to copy the URL to the clipboard
  const generateShareCode = async () => {
    // encrypt formState
    const formValues = watchForm();

    const encryptedFormValues = encryptObject(formValues);

    // hash the value
    const hashBuffer = await generateHash(encryptedFormValues);

    //  update the database with the hashed setup code
    // NOTE: this is in production
    await writeHashedSetup({ hashBuffer, encryptedFormValues });

    // await sql`INSERT INTO hashed_formation_setup (hashed_setup_code, encrypted_setup_code)
    //             VALUES (${hashBuffer}, ${encryptedFormValues})
    //             ON CONFLICT (hashed_setup_code) DO UPDATE
    //             SET encrypted_setup_code=${encryptedFormValues}`;

    // const completeUrl = baseURL + `?setupcode=${hashBuffer}`;
    navigator.clipboard
      .writeText(hashBuffer)
      .then(() => {
        setEncryptedSetupCode(hashBuffer);
        alert('生成的分享码已保存在剪切板，如需保留请复制下来以供以后使用');
      })
      .catch((error) => {
        console.error('分享码生成失败', error);
      });
  };

  const onOpenModal = () => {
    // reset the encrypted code
    setEncryptedSetupCode('');
    openModal();
  };
  const onSubmitModal = () => {
    console.log('onSubmitModal', inputSetupCode);
    setEncryptedSetupCode(inputSetupCode);
    closeModal();
    setInputSetupCode('');
  };
  const onCloseModal = () => {
    setInputSetupCode('');
    closeModal();
  };

  return (
    <>
      {open && (
        <CustomizedModal
          title={'请输入分享码'}
          onSubmit={onSubmitModal}
          closeModal={onCloseModal}
        >
          <SetupCodeInputModal
            inputSetupCode={inputSetupCode}
            setInputSetupCode={setInputSetupCode}
          />
        </CustomizedModal>
      )}
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
          onClick={generateShareCode}
        >
          生成分享码
        </button>
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
          onClick={onOpenModal}
        >
          读取分享码
        </button>
        <input
          type="text"
          readOnly
          value={encryptedSetupCode || ''}
          placeholder={'分享码'}
          // onChange={handleInputChange}
          className="formation_setup-copy-only-field"
        />
      </div>
    </>
  );
};

export default FormationEncryptedCode;
