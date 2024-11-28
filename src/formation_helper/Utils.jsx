// constants
import {
  RAW_HEROES_DATA,
  RAW_HERO_CONFIG_KEYS,
  RAW_HERO_FORMATION_CONFIG_KEYS,
} from '@src/raw_data/HeroData';
import {
  RAW_FORMATION_CONFIG_KEYS,
  RAW_FORMATION_DATA,
  RAW_FORMATION_OVERRIDE,
} from '@src/raw_data/FormationData';

// this is used to map the key in form
export const FORM_KEYS = {
  CATHEDRAL_BONUS: 'cathedralBonus',
  TITLE: 'title',
  TEAM: {
    KEY_NAME: 'team',
    NOTE: 'note',
    HERO: {
      KEY_NAME: 'hero',
      NAME: 'heroName',

      FORMATION_MAX_LVL: 'formationsMaxLevel',
      MAJOR_OVERRIDE: 'majorOverride',
      FORMATION_CONFIG: {
        KEY_NAME: 'formationsConfig',
        LEVEL: 'level',
        NAME: 'name',
      },
    },
  },
};

export const TEAM_HERO_LIMIT = {
  0: {
    MAIN: 4,
    SUPPORT: 2,
  },
  1: {
    MAIN: 4,
    SUPPORT: 2,
  },
  2: {
    MAIN: 4,
    SUPPORT: 2,
  },
};

export const RAW_DATA_HERO_CONFIG_KEYS = {
  FORMATION_CONFIG: 'formation_config',
};

export const FORMATION_CATEGORY_ENUM = {
  MAJOR: 'MAJOR',
  EXTRA: 'EXTRA',
};

export const COMBINATION_FORMATION_NAME = '组合阵线';

export const HERO_FORMATION_RULE = {
  MAX_MAJOR_LVL: 11,
  MIN_MAJOR_LVL: 1,
  // means the minimum MAJOR formation level required to unlock EXTRA formation
  UNLOCK_EXTRA_LVL: 4,
  MAX_EXTRA_LVL: 1,
  MIN_EXTRA_LVL: 0,
};

export const isNumber = (value) => typeof value === 'number' && !isNaN(value);

export const generateArray = (n) => {
  return Array.from({ length: n }, (_, i) => i);
};

export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

// helper function to get the selected max formation lvl of this hero
export const getSelectedMaxFormationLvl = ({
  watchForm,
  teamNumber,
  heroIndex,
}) => {
  return watchForm(
    `${FORM_KEYS.TEAM.KEY_NAME}[${teamNumber}].${FORM_KEYS.TEAM.HERO.KEY_NAME}[${heroIndex}].${FORM_KEYS.TEAM.HERO.FORMATION_MAX_LVL}`
  );
};

// helper function to calculate the total formation lvl of this hero
// the input is a list
export const calculateTotalFormationLvl = ({
  teamNumber,
  heroIndex,
  watchForm,
}) => {
  const formFormationConfigValues = watchForm(
    getHeroFormationConfigFieldName({
      teamNumber,
      heroIndex,
    })
  );

  let curTotalFormationLvl = 0;

  if (!formFormationConfigValues) return curTotalFormationLvl;

  for (const formFormationConfigValue of formFormationConfigValues) {
    if (!formFormationConfigValue) continue;
    curTotalFormationLvl +=
      formFormationConfigValue[FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL];
  }

  return curTotalFormationLvl;
};

// helper function to get the major formation override of target hero
export const getMajorFormationOverrode = ({
  watchForm,
  teamNumber,
  heroIndex,
}) => {
  const hasOverrode = watchForm(
    `${FORM_KEYS.TEAM.KEY_NAME}[${teamNumber}].${FORM_KEYS.TEAM.HERO.KEY_NAME}[${heroIndex}].${FORM_KEYS.TEAM.HERO.MAJOR_OVERRIDE}`
  );

  const heroID = watchForm(
    `${FORM_KEYS.TEAM.KEY_NAME}[${teamNumber}].${FORM_KEYS.TEAM.HERO.KEY_NAME}[${heroIndex}].${FORM_KEYS.TEAM.HERO.NAME}`
  );
  if (!heroID) {
    return null;
  } else {
    // if we set override the major formation, we should use the overrode formation
    const originalMajorFormationID =
      RAW_HEROES_DATA[heroID][RAW_HERO_CONFIG_KEYS.FORMATION_CONFIG][
        RAW_HERO_FORMATION_CONFIG_KEYS.MAJOR
      ];
    return hasOverrode
      ? RAW_FORMATION_OVERRIDE[originalMajorFormationID]
      : originalMajorFormationID;
  }
};

// helper function to return all selected heroes from the form state
// and the current selected hero by hero index in this team
export const getSelectedHeroes = ({
  watchForm,
  teamNumber,
  heroIndex,
  // if this is a support hero selector, we allow duplicated support hero as the other team's support hero
  isSupport = false,
}) => {
  const watchedValues = watchForm();
  if (
    isEmptyObject(watchedValues) ||
    !(FORM_KEYS.TEAM.KEY_NAME in watchedValues)
  )
    return {
      selectedHeroesIDs: [],
      selectedSupportHeroeesCurTeam: [],
      currentSelectedHeroID: null,
    };

  const selectedBattleHeroeIDs = [];
  const selectedSupportHeroeIDs = [];
  const selectedSupportHeroeesCurTeam = [];

  // loop through all team under team field
  for (const [teamIndex, team] of watchedValues[
    FORM_KEYS.TEAM.KEY_NAME
  ].entries()) {
    // check if we have hero information or not
    if (!(FORM_KEYS.TEAM.HERO.KEY_NAME in team)) {
      continue;
    }

    for (const [heroIndex, hero] of team[
      FORM_KEYS.TEAM.HERO.KEY_NAME
    ].entries()) {
      if (heroIndex < TEAM_HERO_LIMIT[0].MAIN) {
        // register battle heroes into battle list
        // which heroIndex is less than 4
        selectedBattleHeroeIDs.push(hero[FORM_KEYS.TEAM.HERO.NAME]);
      } else if (hero[FORM_KEYS.TEAM.HERO.NAME]) {
        // register support heroes into support list
        // which heroIndex is equal or greater than 4
        // in current team
        if (teamIndex.toString() === teamNumber) {
          selectedSupportHeroeesCurTeam.push({
            heroIndex,
            ID: hero[FORM_KEYS.TEAM.HERO.NAME],
          });
        }
        selectedSupportHeroeIDs.push(hero[FORM_KEYS.TEAM.HERO.NAME]);
      }
    }
  }

  if ([...selectedBattleHeroeIDs, ...selectedSupportHeroeIDs].length == 0) {
    return {
      selectedHeroesIDs: [],
      selectedSupportHeroeesCurTeam: [],
      currentSelectedHeroID: null,
    };
  }

  // const currentSelectedHeroID =
  //   watchedValues[FORM_KEYS.TEAM.KEY_NAME][teamNumber][
  //     FORM_KEYS.TEAM.HERO.KEY_NAME
  //   ][heroIndex][FORM_KEYS.TEAM.HERO.NAME];

  const currentSelectedHeroID = watchForm(
    `${FORM_KEYS.TEAM.KEY_NAME}[${teamNumber}].${FORM_KEYS.TEAM.HERO.KEY_NAME}[${heroIndex}].${FORM_KEYS.TEAM.HERO.NAME}`
  );

  let selectedHeroesIDs = selectedBattleHeroeIDs;
  if (!isSupport) {
    // if this is a support hero selector, we allow duplicated support hero as the other team's support hero
    // if it is not we need to exclude all support hero selected
    selectedHeroesIDs.push(...selectedSupportHeroeIDs);
  }
  return {
    selectedHeroesIDs,
    selectedSupportHeroeesCurTeam,
    currentSelectedHeroID,
  };
};

// helper function to get all selected heroes in this team
export const getTriggerableFormationIDsInTeam = ({ watchForm, teamNumber }) => {
  const watchedValues = watchForm();
  if (
    isEmptyObject(watchedValues) ||
    !(FORM_KEYS.TEAM.KEY_NAME in watchedValues)
  )
    return [];

  const selectedBattleHeroeIDs = [];
  const selectedSupportHeroeIDs = [];

  const curTeamInfo = watchedValues[FORM_KEYS.TEAM.KEY_NAME][teamNumber];

  // loop through all team under team field

  for (const [index, hero] of curTeamInfo[
    FORM_KEYS.TEAM.HERO.KEY_NAME
  ].entries()) {
    if (index < TEAM_HERO_LIMIT[0].MAIN) {
      // register battle heroes into battle list
      // which index is less than 4
      selectedBattleHeroeIDs.push(hero[FORM_KEYS.TEAM.HERO.NAME]);
    } else if (hero[FORM_KEYS.TEAM.HERO.NAME]) {
      // register support heroes into support list
      // which index is equal or greater than 4
      selectedSupportHeroeIDs.push(hero[FORM_KEYS.TEAM.HERO.NAME]);
    }
  }

  const selectedHeroIDs = [
    ...selectedBattleHeroeIDs,
    ...selectedSupportHeroeIDs,
  ];

  // filter out empty string
  const filteredHeroIDs = selectedHeroIDs.filter((heroID) => heroID);

  // we need to then find out the tirggerable formation among these heroes
  // for example, if a formation has the minimum trigger lvl of 2, and only one
  // hero has that formation, this formation is not triggerable

  const triggerableFormationIDs = [];

  // get the list of extra formation list of selected heroes
  const selectHeroExtraFormations = filteredHeroIDs.map((heroID) => {
    return RAW_HEROES_DATA[heroID][RAW_HERO_CONFIG_KEYS.FORMATION_CONFIG][
      RAW_HERO_FORMATION_CONFIG_KEYS.EXTRA
    ];
  });

  const filteredExtraFormations = selectHeroExtraFormations.filter(
    (extraFormation) => extraFormation
  );

  for (let formationID in RAW_FORMATION_DATA) {
    const minEffectiveLvl =
      RAW_FORMATION_DATA[formationID][RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL];

    // Count how many HERO objects have this formationID
    const count = filteredExtraFormations.filter((extraFormations) =>
      extraFormations.includes(formationID)
    ).length;

    // Check if the count meets or exceeds the minTrigger
    if (count >= minEffectiveLvl) {
      triggerableFormationIDs.push(formationID);
    }
  }

  return triggerableFormationIDs;
};

// helper function to get the field name of the hero in the form
export const getHeroFieldName = ({ teamNumber, heroIndex }) => {
  return `${FORM_KEYS.TEAM.KEY_NAME}[${teamNumber}].${FORM_KEYS.TEAM.HERO.KEY_NAME}[${heroIndex}]`;
};

// helper function to get the field name of the hero formation config in the form
export const getHeroFormationConfigFieldName = ({ teamNumber, heroIndex }) => {
  const key = `${FORM_KEYS.TEAM.KEY_NAME}[${teamNumber}].${FORM_KEYS.TEAM.HERO.KEY_NAME}[${heroIndex}].${FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME}`;
  return key;
};

export const getTeamFieldName = ({ teamNumber }) => {
  return `${FORM_KEYS.TEAM.KEY_NAME}[${teamNumber}]`;
};

export const getHeroFormationLvlFieldName = ({
  teamNumber,
  heroIndex,
  formationIndex,
}) => {
  return `${FORM_KEYS.TEAM.KEY_NAME}[${teamNumber}].${FORM_KEYS.TEAM.HERO.KEY_NAME}[${heroIndex}].${FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME}[${formationIndex}]`;
};

export const ColoredText = ({ text, color = 'red' }) => {
  return <span style={{ color: color }}>{text}</span>;
};
