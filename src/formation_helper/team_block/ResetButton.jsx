// css
import './TeamBlock.css';

// utils.
import useFormation from '@src/formation_helper/useFormation';
import { getTeamFieldName, FORM_KEYS } from '@src/formation_helper/Utils';
import { cleanTeam } from './Utils';

export const TeamResetButton = ({ teamNumber }) => {
  const teamFieldName = getTeamFieldName({ teamNumber });
  const { setFormValue, watchForm } = useFormation();

  const reset = () => {
    // clean up each field in the team field

    cleanTeam({ teamFieldName, teamNumber, setFormValue, watchForm });
  };
  return (
    <button type="button" className="team-block-reset-button" onClick={reset}>
      重置此队伍设置
    </button>
  );
};

export const AllResetButton = () => {
  const { setFormValue, watchForm } = useFormation();

  const reset = () => {
    // clean up all teams
    cleanTeam({
      teamFieldName: getTeamFieldName({ teamNumber: 0 }),
      teamNumber: 0,
      setFormValue,
      watchForm,
    });
    cleanTeam({
      teamFieldName: getTeamFieldName({ teamNumber: 1 }),
      teamNumber: 1,
      setFormValue,
      watchForm,
    });
    cleanTeam({
      teamFieldName: getTeamFieldName({ teamNumber: 2 }),
      teamNumber: 2,
      setFormValue,
      watchForm,
    });

    // clean up title
    setFormValue(`${FORM_KEYS.TITLE}`, '');
  };
  return (
    <button
      type="button"
      className="team-block-reset-all-button team-block-reset-button"
      onClick={reset}
    >
      重置所有设置
    </button>
  );
};
