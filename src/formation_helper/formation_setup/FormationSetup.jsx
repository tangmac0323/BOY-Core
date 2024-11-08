// css
import './FormationSetup.css';

// components
import TeamBlock from '../team_block/TeamBlock';
import CathedralToggle from '../shared/CathedralToggle';
import CustomizedTitle from '../shared/CustomizedTitle/CustomizedTitle';

const FormationSetup = () => {
  return (
    <div className="formation-setup-main">
      <CustomizedTitle />
      <CathedralToggle />
      <TeamBlock teamNumber="0" />
      <TeamBlock teamNumber="1" />
      <TeamBlock teamNumber="2" />
    </div>
  );
};

export default FormationSetup;
