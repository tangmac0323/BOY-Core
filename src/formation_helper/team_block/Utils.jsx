// utils
import { FORM_KEYS, getHeroFieldName } from '@src/formation_helper/Utils';

import {
  RAW_HEROES_DATA,
  RAW_HERO_CONFIG_KEYS,
  RAW_HERO_FORMATION_CONFIG_KEYS,
} from '@src/raw_data/HeroData';

export const resetHero = ({ heroFieldName, heroID, setFormValue }) => {
  // reset the max formation lvl selected for this hero in form
  setFormValue(`${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_MAX_LVL}`, 1);
  const formationDefaultValues = [];

  const majorFormationID =
    RAW_HEROES_DATA[heroID][RAW_HERO_CONFIG_KEYS.FORMATION_CONFIG][
      RAW_HERO_FORMATION_CONFIG_KEYS.MAJOR
    ];

  formationDefaultValues.push({ name: majorFormationID, level: 1 });

  // --------------------------- prefeed extra formation --------------------------
  const extraFormationIDs =
    RAW_HEROES_DATA[heroID][RAW_HERO_CONFIG_KEYS.FORMATION_CONFIG][
      RAW_HERO_FORMATION_CONFIG_KEYS.EXTRA
    ];

  for (const extraFormationID of extraFormationIDs) {
    // reset the formation config in form to major formation with lvl 1
    formationDefaultValues.push({ name: extraFormationID, level: 0 });
  }

  // reset the formation config in form
  setFormValue(
    `${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME}`,
    formationDefaultValues
  );
};

export const cleanHero = ({ heroFieldName, setFormValue }) => {
  // reset the max formation lvl selected for this hero in form
  setFormValue(`${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_MAX_LVL}`, 1);
  setFormValue(`${heroFieldName}.${FORM_KEYS.TEAM.HERO.NAME}`, '');

  const formationDefaultValues = [];

  // reset the formation config in form
  setFormValue(
    `${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME}`,
    formationDefaultValues
  );
};

export const cleanTeam = ({
  teamFieldName,
  teamNumber,
  setFormValue,
  watchForm,
}) => {
  const teamFieldValue = watchForm(teamFieldName);
  // clean the note
  setFormValue(`${teamFieldName}.${FORM_KEYS.TEAM.NOTE}`, '');

  // loop through each hero in the team and reset each hero
  // clean up each field in the team field
  const heroes = teamFieldValue[FORM_KEYS.TEAM.HERO.KEY_NAME];
  for (const [index, heroConfig] of heroes.entries()) {
    const heroFieldName = getHeroFieldName({ teamNumber, heroIndex: index });
    cleanHero({
      heroFieldName,
      setFormValue,
    });
  }
};
