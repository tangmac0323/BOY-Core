import { useMemo, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

// context
import FormationContext from './FormationContext';

// json
import formationsJson from '@src/public/raw_data/formations.json';
import heroesJson from '@src/public/raw_data/heroes.json';

// constants
import { FORM_KEYS } from './Utils';

const FormationProvider = ({ children }) => {
  // load the formation json file
  const formationCategories = useMemo(
    () =>
      Object.keys(formationsJson).map((key) => {
        return key;
      }),
    []
  );

  // load the ${FORM_KEYS.HERO} json file
  const heroCategories = useMemo(
    () =>
      Object.keys(heroesJson).map((key) => {
        return key;
      }),
    []
  );

  const { control, handleSubmit, watch, setValue: setFormValue } = useForm();
  // const { formationCategories, heroCategories } = useFormation();

  // Watch all fields
  const watchedValues = watch();

  const handleFormChange = (values) => {
    console.log('Form changed:', values);
    // Add custom logic here, e.g., validation, API calls, etc.
  };

  // Custom function to run on every change
  useEffect(() => {
    handleFormChange(watchedValues);
  }, [watchedValues]);

  // state to store the selected ${FORM_KEYS.HERO} for each ${FORM_KEYS.TEAM}
  const [heroesSelected, setHeroesSelected] = useState({
    // TEAM-0
    [`${FORM_KEYS.TEAM}[0].${FORM_KEYS.HERO}[0]`]: '',
    [`${FORM_KEYS.TEAM}[0].${FORM_KEYS.HERO}[1]`]: '',
    [`${FORM_KEYS.TEAM}[0].${FORM_KEYS.HERO}[2]`]: '',
    [`${FORM_KEYS.TEAM}[0].${FORM_KEYS.HERO}[3]`]: '',

    // TEAM-1
    [`${FORM_KEYS.TEAM}[1].${FORM_KEYS.HERO}[0]`]: '',
    [`${FORM_KEYS.TEAM}[1].${FORM_KEYS.HERO}[1]`]: '',
    [`${FORM_KEYS.TEAM}[1].${FORM_KEYS.HERO}[2]`]: '',
    [`${FORM_KEYS.TEAM}[1].${FORM_KEYS.HERO}[3]`]: '',

    // TEAM-2
    [`${FORM_KEYS.TEAM}[2].${FORM_KEYS.HERO}[0]`]: '',
    [`${FORM_KEYS.TEAM}[2].${FORM_KEYS.HERO}[1]`]: '',
    [`${FORM_KEYS.TEAM}[2].${FORM_KEYS.HERO}[2]`]: '',
    [`${FORM_KEYS.TEAM}[2].${FORM_KEYS.HERO}[3]`]: '',

    // SUPPORT
    [`${FORM_KEYS.TEAM}[3].${FORM_KEYS.HERO}[0]`]: '',
    [`${FORM_KEYS.TEAM}[3].${FORM_KEYS.HERO}[1]`]: '',
  });

  const [formationLvlSelected, setFormationLvlSelected] = useState({
    // TEAM-0
    [`${FORM_KEYS.TEAM}[0].${FORM_KEYS.HERO}[0].${FORM_KEYS.FORMATION_LVL}`]: 0,
    [`${FORM_KEYS.TEAM}[0].${FORM_KEYS.HERO}[1].${FORM_KEYS.FORMATION_LVL}`]: 0,
    [`${FORM_KEYS.TEAM}[0].${FORM_KEYS.HERO}[2].${FORM_KEYS.FORMATION_LVL}`]: 0,
    [`${FORM_KEYS.TEAM}[0].${FORM_KEYS.HERO}[3].${FORM_KEYS.FORMATION_LVL}`]: 0,

    // TEAM-1
    [`${FORM_KEYS.TEAM}[1].${FORM_KEYS.HERO}[0].${FORM_KEYS.FORMATION_LVL}`]: 0,
    [`${FORM_KEYS.TEAM}[1].${FORM_KEYS.HERO}[1].${FORM_KEYS.FORMATION_LVL}`]: 0,
    [`${FORM_KEYS.TEAM}[1].${FORM_KEYS.HERO}[2].${FORM_KEYS.FORMATION_LVL}`]: 0,
    [`${FORM_KEYS.TEAM}[1].${FORM_KEYS.HERO}[3].${FORM_KEYS.FORMATION_LVL}`]: 0,

    // TEAM-2
    [`${FORM_KEYS.TEAM}[2].${FORM_KEYS.HERO}[0].${FORM_KEYS.FORMATION_LVL}`]: 0,
    [`${FORM_KEYS.TEAM}[2].${FORM_KEYS.HERO}[1].${FORM_KEYS.FORMATION_LVL}`]: 0,
    [`${FORM_KEYS.TEAM}[2].${FORM_KEYS.HERO}[2].${FORM_KEYS.FORMATION_LVL}`]: 0,
    [`${FORM_KEYS.TEAM}[2].${FORM_KEYS.HERO}[3].${FORM_KEYS.FORMATION_LVL}`]: 0,

    // SUPPORT
    [`${FORM_KEYS.TEAM}[3].${FORM_KEYS.HERO}[0].${FORM_KEYS.FORMATION_LVL}`]: 0,
    [`${FORM_KEYS.TEAM}[3].${FORM_KEYS.HERO}[1].${FORM_KEYS.FORMATION_LVL}`]: 0,
  });

  const value = {
    heroes: heroesJson,
    formationCategories,
    heroCategories,

    // ----- hero selected -----
    heroesSelected,
    setHeroesSelected,

    // ----- formation lvl -----
    formationLvlSelected,
    setFormationLvlSelected,

    // ----- form values -----
    control,
    watchForm: watch,
  };

  return (
    <FormationContext.Provider value={value}>
      <form>{children}</form>
    </FormationContext.Provider>
  );
};

export default FormationProvider;
