import CryptoJS from 'crypto-js';
import LZString from 'lz-string';

const secretKey = CryptoJS.enc.Utf8.parse('SUPERTMT'); // Use a secure, unique key
const iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000'); // Fixed IV (in hex)

// Encrypt function
export const encryptObject = (obj) => {
  const encJson = CryptoJS.AES.encrypt(JSON.stringify(obj), secretKey, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
  const encData = CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Utf8.parse(encJson)
  );

  // PROLLY WE SHOULD ONLY USE UTF16
  // const compressedData = LZString.compressToBase64(encData);
  return encData;
};

// Decrypt function
export const decryptObject = (encryptedData) => {
  // PROLLY WE SHOULD ONLY USE UTF16
  // const encryptedData = JSON.parse(
  //   LZString.decompressFromBase64(compressedData)
  // );

  const decData = CryptoJS.enc.Base64.parse(encryptedData).toString(
    CryptoJS.enc.Utf8
  );
  const bytes = CryptoJS.AES.decrypt(decData, secretKey, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8);
  return JSON.parse(bytes);
};
