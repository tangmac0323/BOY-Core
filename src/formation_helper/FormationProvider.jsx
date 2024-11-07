import { useMemo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

// context
import FormationContext from './FormationContext';
import FormationEncryptUrl, {
  retrieveHashedSetup,
} from './FormationEncryptUrl';
import { HEROES_NAME_UUID4_MAPPING } from '@src/formation_helper/shared/HeroData';
import Loading from '@src/formation_helper/shared/Loading/Loading';

const FormationProvider = ({ children }) => {
  // Extracts the setupcode for initialize form
  const [searchParams] = useSearchParams();
  const setupcode = searchParams.get('setupcode');

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
    retrieveHashedSetup({
      hashedSetupCode: setupcode,
      resetForm,
      setIsLoading
    });
  }, [setupcode]);

  // Watch all fields
  // const watchedValues = watchForm();

  // const handleFormChange = (values) => {
  //   console.log('Form changed:', values);
  // };

  // // Custom function to run on every change
  // useEffect(() => {
  //   handleFormChange(watchedValues);
  // }, [watchedValues]);

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
    {isLoading ? <Loading /> :
      <form>
        <FormationEncryptUrl
          baseURL={baseURL}
          encryptedUrl={encryptedUrl}
          setEncryptedUrl={setEncryptedUrl}
        />
        {children}
      </form>}
    </FormationContext.Provider>
  );
};

export default FormationProvider;
