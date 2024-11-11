// css
import './TeamBlock.css';

// components
import HeroSetup from './HeroSetup';
import FormationEffectSummary from './FormationEffectSummary';
import TeamNote from './TeamNote';
import { TeamResetButton } from '@src/formation_helper/team_block/ResetButton';

// constants
import { TEAM_HERO_LIMIT, FORM_KEYS, generateArray } from '../Utils';

const TeamBlock = ({ teamNumber }) => {
  const teamLabel = `队伍 #${teamNumber}`;
  // const formationCategories =

  return (
    <div className="team-block">
      <div
        key={`${FORM_KEYS.TEAM.KEY_NAME}-${teamNumber}`}
        style={{ marginBottom: '16px' }}
      >
        <div className="team-block-header">
          <h2>{teamLabel}</h2>
          <TeamResetButton teamNumber={teamNumber} />
        </div>

        <TeamNote teamNumber={teamNumber} />
        <label>
          <b>上阵：</b>
        </label>
        {generateArray(TEAM_HERO_LIMIT[teamNumber].MAIN).map((heroIndex) => (
          <HeroSetup
            key={`${FORM_KEYS.TEAM.KEY_NAME}[${teamNumber}].${FORM_KEYS.TEAM.HERO.KEY_NAME}[${heroIndex}]`}
            teamNumber={teamNumber}
            heroIndex={heroIndex}
            isSupport={false}
          />
        ))}
        <label>
          <b>支援:</b>
        </label>
        {generateArray(TEAM_HERO_LIMIT[teamNumber].SUPPORT).map((heroIndex) => (
          <HeroSetup
            key={`${FORM_KEYS.TEAM.KEY_NAME}[${teamNumber}].${
              FORM_KEYS.TEAM.HERO.KEY_NAME
            }[${heroIndex + TEAM_HERO_LIMIT[teamNumber].MAIN}]`}
            teamNumber={teamNumber}
            heroIndex={heroIndex + TEAM_HERO_LIMIT[teamNumber].MAIN}
            isSupport={true}
          />
        ))}
        {/* TODO: add formation effect */}
        <FormationEffectSummary teamNumber={teamNumber} />
      </div>
    </div>
  );
};

export default TeamBlock;
