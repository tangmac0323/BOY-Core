// this is used to map the key in form
export const FORM_KEYS = {
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

export const DATA_HERO_CONFIG_ENUM = {
  FORMATION_CONFIG: 'formation_config',
};

export const DATA_HERO_FORMATION_CONFIG_ENUM = {
  MAX_LVL: 'max_lvl',
  DEFAULT: 'default',
  EXTRA: 'extra',
};

export const DATA_FORMATION_CONFIG_ENUM = {
  MAX_LVL: 'max_lvl',
  NAME: 'name',
  EFFECTS: 'effects',
};

export const HERO_FORMATION_RULE = {
  MAX_DEFAULT_LVL: 11,
  MIN_DEFAULT_LVL: 1,
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
    curTotalFormationLvl +=
      formFormationConfigValue[FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL];
  }

  return curTotalFormationLvl;
};

// helper function to return all selected heroes from the form state
// and the current selected hero by hero index in this team
export const getSelectedHeroes = ({ watchForm, teamNumber, heroIndex }) => {
  const watchedValues = watchForm();
  if (isEmptyObject(watchedValues))
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
