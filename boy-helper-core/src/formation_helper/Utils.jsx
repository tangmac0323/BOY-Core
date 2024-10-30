// this is used to map the key in form
export const FORM_KEYS = {
  TEAM: 'team',
  HERO: 'hero',
  HERO_NAME: 'heroName',
  FORMATION_LVL: 'formationLevel',
};

// export const HERO_INDEX = [0, 1, 2, 3];

export const TEAM_HERO_LIMIT = {
  0: 4,
  1: 4,
  2: 4,
  3: 2,
};

export const HERO_CONFIG_KEY = {
  FORMATION_CONFIG: 'formation-config',
  FORMATION_CONFIG_MAX_LVL: 'max-lvl',
};

export const generateArray = (n) => {
  return Array.from({ length: n }, (_, i) => i);
};
