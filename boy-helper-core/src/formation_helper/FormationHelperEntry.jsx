// css
import './FormationHelperEntry.css';

// provider
import FormationProvider from './FormationProvider';

// components
import FormationSetup from './formation_setup/FormationSetup';

const FormationHelperEntry = () => {
  return (
    <FormationProvider>
      <div className="formation-helper-main">
        <FormationSetup />
      </div>
    </FormationProvider>
  );
};

export default FormationHelperEntry;
