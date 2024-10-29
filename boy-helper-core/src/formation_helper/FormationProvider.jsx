import { useMemo, useState } from 'react';

// context
import FormationContext from './FormationContext';

// json
import formationsJson from '@src/public/raw_data/formations.json';
import heroesJson from '@src/public/raw_data/heroes.json';

const FormationProvider = ({ children }) => {
  // load the formation json file
  const formationCategories = useMemo(
    () =>
      Object.keys(formationsJson).map((key) => {
        return key;
      }),
    []
  );

  // load the hero json file
  const heroCategories = useMemo(
    () =>
      Object.keys(heroesJson).map((key) => {
        return key;
      }),
    []
  );

  const value = {
    formationCategories,
    heroCategories,
  };

  return (
    <FormationContext.Provider value={value}>
      {children}
    </FormationContext.Provider>
  );
};

export default FormationProvider;
