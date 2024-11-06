// css
import './FormationSetup.css';

// components
import TeamBlock from '../team_block/TeamBlock';
import CathedralToggle from '../shared/CathedralToggle';

const FormationSetup = () => {
  return (
    <div className="formation-setup-main">
      <CathedralToggle />
      <TeamBlock teamNumber="0" />
      <TeamBlock teamNumber="1" />
      <TeamBlock teamNumber="2" />
    </div>
  );
};

export default FormationSetup;
