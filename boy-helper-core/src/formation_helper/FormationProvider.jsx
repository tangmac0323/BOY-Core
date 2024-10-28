import { useMemo } from 'react';

// context
import FormationContext from './FormationContext';

// json
import formationsJson from '@src/public/raw_data/formations.json';
import heroesJson from '@src/public/raw_data/heroes.json';

const buildFormationOptions = () => {
  return;
};

const buildHeroOptions = () => {
  return;
};

const FormationProvider = ({ children }) => {
  // load the formation json file
  const formationCategories = useMemo(
    () =>
      Object.keys(formationsJson).map((key) => {
        return key;
      }),
    []
  );

  console.log(formationCategories);

  // load the hero json file
  const heroCategories = useMemo(
    () =>
      Object.keys(heroesJson).map((key) => {
        return key;
      }),
    []
  );

  console.log(heroCategories);
  return (
    <FormationContext.Provider value={FormationContext}>
      {children}
    </FormationContext.Provider>
  );
};

export default FormationProvider;
