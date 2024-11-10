import CryptoJS from 'crypto-js';

export const generateHash = async (base64String) => {
  // Convert the base64 string to a Uint8Array
  const encoder = new TextEncoder();
  const data = encoder.encode(base64String);

  // Generate the hash
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  // Convert the hash buffer to a hexadecimal string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');

  return hashHex;
};

const secretKey = CryptoJS.enc.Utf8.parse('SUPERTMT'); // Use a secure, unique key
const iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000'); // Fixed IV (in hex)

// Encrypt function
export const encryptObject = (inputObj) => {
  // comporess the json string
  const jsonStr = JSON.stringify(inputObj);

  const encryptedCompressedData = CryptoJS.AES.encrypt(jsonStr, secretKey, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();

  const encryptedDataStr = encryptedCompressedData.toString();

  return encryptedDataStr;
};

// Decrypt function
export const decryptObject = (encryptedData) => {
  const decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8);

  // Convert decrypted data back to JSON object
  const decryptedJson = JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));
  return decryptedJson;
};
