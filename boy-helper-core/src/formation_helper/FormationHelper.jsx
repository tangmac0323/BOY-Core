// css
import './FormationHelper.css';

// provider
import FormationProvider from './FormationProvider';

// components
import TeamBlock from './team_block/TeamBlock';

const FormationHelperEntry = () => {
  return (
    <FormationProvider>
      <div className="formation-helper-main">
        <TeamBlock teamNumber="1" />
        <TeamBlock teamNumber="2" />
        <TeamBlock teamNumber="3" />
      </div>
    </FormationProvider>
  );
};

export default FormationHelperEntry;
