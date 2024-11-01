// this is used to map the key in form
export const FORM_KEYS = {
  TEAM: 'team',
  HERO: 'hero',
  HERO_NAME: 'heroName',
  HERO_FORMATION_MAX_LVL: 'formationLevel',
  FORMATION_CONFIGURATOR: 'formationConfig',
  FORMATION_CONFIGURATOR_LVL: 'level',
  FORMATION_CONFIGURATOR_NAME: 'name',
};

// export const HERO_INDEX = [0, 1, 2, 3];

export const TEAM_HERO_LIMIT = {
  0: 4,
  1: 4,
  2: 4,
  3: 2,
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
  MAX_EXTRA_LVL: 2,
  MIN_EXTRA_LVL: 0,
};

export const generateArray = (n) => {
  return Array.from({ length: n }, (_, i) => i);
};
