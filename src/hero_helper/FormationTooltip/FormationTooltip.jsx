// css
import './FormationTooltip.css';

// utils
import {
  RAW_FORMATION_DATA,
  RAW_FORMATION_CONFIG_KEYS,
} from '@src/raw_data/FormationData';

const FormationTooltip = ({ formation }) => {
  const formationID = formation.id;
  const formationName = formation.name;
  const tooltipText =
    RAW_FORMATION_DATA[formationID][RAW_FORMATION_CONFIG_KEYS.DESCRIPTION];
  return (
    <div className="tooltip">
      {formationName}
      <span className="tooltiptext">{tooltipText}</span>
    </div>
  );
};

export default FormationTooltip;
