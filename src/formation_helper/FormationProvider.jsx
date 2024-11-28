import { useMemo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';

// utils
import FormationContext from './FormationContext';
import FormationEncryptedCode, {
  retrieveHashedSetup,
} from './FormationEncryptUrl';
import { HEROES_NAME_UUID4_MAPPING } from '@src/raw_data/HeroData';
import Loading from '@src/formation_helper/shared/Loading/Loading';
import { FORMATION_COOKIE_KEY } from '@src/home_page/cookie_consent/CookieConsent';

const FormationProvider = ({ children }) => {
  // Extracts the setupcode for initialize form
  // ------------------------- Cookie data for user setup -------------------------
  const userCookie = Cookies.get('bookofyogcore-usersetupdata');
  const userCookieData = useMemo(() => {
    if (userCookie) {
      return JSON.parse(Cookies.get(FORMATION_COOKIE_KEY));
    }

    return null;
  }, [userCookie]);

  // ---------------------- load from db with feeding setupcode ----------------------
  const [encryptedSetupCode, setEncryptedSetupCode] = useState();

  // state to indicate loading state
  const [isLoading, setIsLoading] = useState(false);

  // decrypt the form state from the shareCode
  const HERO_UUID4_LIST = useMemo(
    () =>
      Object.keys(HEROES_NAME_UUID4_MAPPING).map((key) => {
        return key;
      }),
    []
  );

  const {
    control,
    handleSubmit,
    watch: watchForm,
    setValue: setFormValue,
    resetField: resetFormField,
    reset: resetForm,
  } = useForm();

  // we only try to retrieve the decrypted setup code from the db on the very first render
  useEffect(() => {
    console.log('getting encrypted setup code', encryptedSetupCode);
    // TODO: PRODUCTION: comment back once deployed
    if (encryptedSetupCode) {
      retrieveHashedSetup({
        hashedSetupCode: encryptedSetupCode,
        resetForm,
        setIsLoading,
      });
    }
  }, [encryptedSetupCode]);

  // only load the cookie upon first render
  useEffect(() => {
    if (userCookieData) {
      console.log('reset with cookie data', userCookieData);
      resetForm(userCookieData);
    }
  }, []);

  // ---------------------- in form change event ----------------------

  // Watch all fields
  const watchedValues = watchForm();

  const handleFormChange = (watchedValues) => {
    // reset the encrypted code
    setEncryptedSetupCode('');
    Cookies.set(FORMATION_COOKIE_KEY, JSON.stringify(watchedValues), {
      expires: 7,
    }); // Expires in 7 days
  };

  // Custom function to run on every change
  useEffect(() => {
    console.log('form', watchedValues);
    handleFormChange(watchedValues);
  }, [watchedValues]);

  // construct provider values
  const value = {
    HERO_UUID4_LIST,

    // ----- form values -----
    control,
    watchForm,
    resetFormField,
    setFormValue,
  };

  return (
    <FormationContext.Provider value={value}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <FormationEncryptedCode
            encryptedSetupCode={encryptedSetupCode}
            setEncryptedSetupCode={setEncryptedSetupCode}
          />
          <form>{children}</form>
        </>
      )}
    </FormationContext.Provider>
  );
};

export default FormationProvider;
