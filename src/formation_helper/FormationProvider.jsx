import { useMemo, useEffect } from 'react';
import { useForm } from 'react-hook-form';

// context
import FormationContext from './FormationContext';

// json
import formationsJson from '@src/raw_data/formations.json';
import heroesJson from '@src/raw_data/heroes.json';

const FormationProvider = ({ children }) => {
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
  } = useForm();
  // const { formationCategories, heroCategories } = useFormation();

  // Watch all fields
  const watchedValues = watchForm();

  const handleFormChange = (values) => {
    console.log('Form changed:', values);
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
      <form>{children}</form>
    </FormationContext.Provider>
  );
};

export default FormationProvider;
