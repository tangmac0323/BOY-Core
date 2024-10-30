// css
import './TeamBlock.css';

import { useForm, Controller } from 'react-hook-form';

// hooks
import useFormation from '../useFormation';

// components
import HeroSetup from './HeroSetup';

// constants
import { TEAM_HERO_LIMIT, FORM_KEYS, generateArray } from '../Utils';

const TeamBlock = ({ teamNumber }) => {
  const teamLabel = teamNumber != 3 ? `队伍 #${teamNumber}` : '支援';
  // const formationCategories =
  return (
    <div className=".team-block">
      <div
        key={`${FORM_KEYS.TEAM}-${teamNumber}`}
        style={{ marginBottom: '16px' }}
      >
        <label>{teamLabel}</label>
        {generateArray(TEAM_HERO_LIMIT[teamNumber]).map((heroIndex) => (
          <HeroSetup
            key={`${FORM_KEYS.TEAM}[${teamNumber}].${FORM_KEYS.HERO}[${heroIndex}]`}
            teamNumber={teamNumber}
            heroIndex={heroIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamBlock;
