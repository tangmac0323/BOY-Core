import { useMemo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';

// utils
import FormationContext from './FormationContext';
import FormationEncryptUrl, {
  retrieveHashedSetup,
} from './FormationEncryptUrl';
import { HEROES_NAME_UUID4_MAPPING } from '@src/raw_data/HeroData';
import Loading from '@src/formation_helper/shared/Loading/Loading';
import { FORMATION_COOKIE_KEY } from '@src/home_page/cookie_consent/CookieConsent';

const FormationProvider = ({ children }) => {
  // Extracts the setupcode for initialize form
  const [searchParams] = useSearchParams();
  const setupcode = searchParams.get('setupcode');

  // ------------------------- Cookie data for user setup -------------------------
  const userCookie = Cookies.get('bookofyogcore-usersetupdata');
  const userCookieData = useMemo(() => {
    if (userCookie) {
      return JSON.parse(Cookies.get(FORMATION_COOKIE_KEY));
    }

    return null;
  }, [userCookie]);

  // ---------------------- load from db with feeding param ----------------------
  // Get the domain of the current URL
  const currentDomain = window.location.origin;
  const currentUrl = window.location.href; // Full URL

  const baseURL = `${currentDomain}/formation-helper`;
  const [encryptedUrl, setEncryptedUrl] = useState(currentUrl);

  // state to indicate loading state
  const [isLoading, setIsLoading] = useState(false);

  // decrypt the form state from the setupcode
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
    if (setupcode) {
      retrieveHashedSetup({
        hashedSetupCode: setupcode,
        resetForm,
        setIsLoading,
      });
    }
  }, [setupcode]);

  // only load the cookie upon first render
  useEffect(() => {
    if (!setupcode && userCookieData) {
      console.log('reset with cookie data');
      resetForm(userCookieData);
    }
  }, []);

  // ---------------------- in form change event ----------------------

  // Watch all fields
  const watchedValues = watchForm();

  const handleFormChange = (values) => {
    Cookies.set(FORMATION_COOKIE_KEY, JSON.stringify(values), {
      expires: 7,
    }); // Expires in 7 days
  };

  // Custom function to run on every change
  useEffect(() => {
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
        <form>
          <FormationEncryptUrl
            baseURL={baseURL}
            encryptedUrl={encryptedUrl}
            setEncryptedUrl={setEncryptedUrl}
          />
          {children}
        </form>
      )}
    </FormationContext.Provider>
  );
};

export default FormationProvider;
