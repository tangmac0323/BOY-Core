// css
import './FormationSetup.css';

// components
import TeamBlock from '../team_block/TeamBlock';
import CathedralToggle from '../shared/CathedralToggle/CathedralToggle';
import CustomizedTitle from '../shared/CustomizedTitle/CustomizedTitle';
import { AllResetButton } from '@src/formation_helper/team_block/ResetButton';

const FormationSetup = () => {
  return (
    <div className="formation-setup-main">
      <CustomizedTitle />
      <AllResetButton />
      <CathedralToggle />
      <TeamBlock teamNumber="0" />
      <TeamBlock teamNumber="1" />
      <TeamBlock teamNumber="2" />
      <TeamBlock teamNumber="3" />
    </div>
  );
};

export default FormationSetup;
