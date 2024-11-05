// this is used to map the key in form
export const FORM_KEYS = {
  CATHEDRAL_BONUS: 'cathedralBonus',
  TEAM: {
    KEY_NAME: 'team',
    HERO: {
      KEY_NAME: 'hero',
      NAME: 'heroName',
      FORMATION_MAX_LVL: 'formationsMaxLevel',
      FORMATION_CONFIG: {
        KEY_NAME: 'formationsConfig',
        LEVEL: 'level',
        NAME: 'name',
      },
    },
  },
  // TEAM: 'team',
  // HERO: 'hero',
  // HERO_NAME: 'heroName',
  // HERO_FORMATION_MAX_LVL: 'formationsMaxLevel',
  // FORMATION_CONFIGURATOR: 'formationsConfig',
  // FORMATION_CONFIGURATOR_LVL: 'level',
  // FORMATION_CONFIGURATOR_NAME: 'name',
};

// export const HERO_INDEX = [0, 1, 2, 3];

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

export const RAW_DATA_HERO_FORMATION_CONFIG_KEYS = {
  MAX_LVL: 'max_lvl',
  MAJOR: 'major',
  EXTRA: 'extra',
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

// helper function to return all selected heroes from the form state
// and the current selected hero by hero index in this team
export const getSelectedHeroes = ({ watchForm, teamNumber, heroIndex }) => {
  const watchedValues = watchForm();
  if (
    isEmptyObject(watchedValues) ||
    !(FORM_KEYS.TEAM.KEY_NAME in watchedValues)
  )
    return {
      selectedHeroes: [],
      currentSelectedHero: null,
    };

  const selectedHeroes = [];

  // loop through all team under team field
  for (const team of watchedValues[FORM_KEYS.TEAM.KEY_NAME]) {
    // register the heroes into the list
    for (const hero of team[FORM_KEYS.TEAM.HERO.KEY_NAME]) {
      if (hero[FORM_KEYS.TEAM.HERO.NAME]) {
        selectedHeroes.push(hero[FORM_KEYS.TEAM.HERO.NAME]);
      }
    }
  }

  if (selectedHeroes.length == 0) {
    return {
      selectedHeroes: [],
      currentSelectedHero: null,
    };
  }

  const currentSelectedHero =
    watchedValues[FORM_KEYS.TEAM.KEY_NAME][teamNumber][
      FORM_KEYS.TEAM.HERO.KEY_NAME
    ][heroIndex][FORM_KEYS.TEAM.HERO.NAME];

  return { selectedHeroes, currentSelectedHero };
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
