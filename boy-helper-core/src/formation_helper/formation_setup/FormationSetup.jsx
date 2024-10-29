import { useState, useEffect } from 'react';

// form
import { useForm, Controller } from 'react-hook-form';

// hooks
import useFormation from '../useFormation';

// css
import './FormationSetup.css';

// components
import TeamBlock from '../team_block/TeamBlock';

const buildFormationOptions = () => {
  return;
};

const buildHeroOptions = () => {
  return;
};

const FormationSetup = () => {
  const { control, handleSubmit, watch } = useForm();
  const { formationCategories, heroCategories } = useFormation();

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

  // state to store the selected hero for each team
  const [teamOneselectedHero, setTeamOneSelectedHero] = useState();
  const [teamTwoselectedHero, setTeamTwoSelectedHero] = useState();
  const [teamThreeselectedHero, setTeamThreeSelectedHero] = useState();

  //   this function will generate the valid hero options for each team
  const validHeroOptions = useEffect(() => {}, [
    teamOneselectedHero,
    teamTwoselectedHero,
    teamThreeselectedHero,
  ]);

  return (
    <div className="formation-setup-main">
      <form>
        <TeamBlock teamNumber="1" validHeroOptions={validHeroOptions} />
        <TeamBlock teamNumber="2" validHeroOptions={validHeroOptions} />
        <TeamBlock teamNumber="3" validHeroOptions={validHeroOptions} />
      </form>
    </div>
  );
};

export default FormationSetup;
