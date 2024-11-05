import { useMemo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

// context
import FormationContext from './FormationContext';
import FormationEncryptUrl from './FormationEncryptUrl';

// json
import formationsJson from '@src/raw_data/formations.json';
import heroesJson from '@src/raw_data/heroes.json';

// utils
import { decryptObject, encryptObject } from '@src/crypto/Utils';

const FormationProvider = ({ children }) => {
  // Extracts the setupcode for initialize form
  const [searchParams] = useSearchParams();
  const setupcode = searchParams.get('setupcode');

  // decrypt the form state from the setupcode
  const decryptedFormState = setupcode ? decryptObject(setupcode) : null;

  const [encryptedSetupCode, setEncryptedSetupCode] = useState(setupcode);

  // load the formation json file
  const formationCategories = useMemo(
    () =>
      Object.keys(formationsJson).map((key) => {
        return key;
      }),
    []
  );

  // load the ${FORM_KEYS.TEAM.HERO.KEY_NAME} json file
  const heroCategories = useMemo(
    () =>
      Object.keys(heroesJson).map((key) => {
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
  // const { formationCategories, heroCategories } = useFormation();

  useEffect(() => {
    resetForm(decryptedFormState);
  }, [setupcode]);

  // Watch all fields
  const watchedValues = watchForm();

  const handleFormChange = (values) => {
    if (values && Object.keys(values).length > 0) {
      setEncryptedSetupCode(encryptObject(values));
    }
    // Add custom logic here, e.g., validation, API calls, etc.
  };

  // Custom function to run on every change
  useEffect(() => {
    handleFormChange(watchedValues);
  }, [watchedValues]);

  const value = {
    HEROES_RAW_DATA: heroesJson,
    FORMATIONS_RAW_DATA: formationsJson,
    formationCategories,
    heroCategories,

    // ----- form values -----
    control,
    watchForm,
    resetFormField,
    setFormValue,
  };

  return (
    <FormationContext.Provider value={value}>
      <FormationEncryptUrl encryptedSetupCode={encryptedSetupCode} />
      <form>{children}</form>
    </FormationContext.Provider>
  );
};

export default FormationProvider;
