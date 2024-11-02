import { useState, useMemo, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

// hooks
import useFormation from '../useFormation';

// constants
import {
  FORM_KEYS,
  DATA_HERO_CONFIG_ENUM,
  DATA_HERO_FORMATION_CONFIG_ENUM,
  DATA_FORMATION_CONFIG_ENUM,
  HERO_FORMATION_RULE,
  isEmptyObject,
} from '../Utils';

// helper function to get the formation and cumulative formation lvl mapping
const getFormationLvlMapping = ({ watchForm, teamNumber }) => {
  // get the form data
  const watchedValues = watchForm();

  if (isEmptyObject(watchedValues)) return;
  const heroesData =
    watchedValues[FORM_KEYS.TEAM.KEY_NAME][teamNumber][
      FORM_KEYS.TEAM.HERO.KEY_NAME
    ];

  if (teamNumber == 0) {
    console.log(`heroesData ${teamNumber}`, heroesData);
  }

  // construct the formationData by iterating through the heroesData
  const fData = {};
  for (const hData of heroesData) {
    if (!(FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME in hData)) continue;
    const hFormationConfig =
      hData[FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME];

    // loop through the formation config data to get the formation name and lvl
    for (const hFormationData of hFormationConfig) {
      // get the formation name and formation lvl from the formation config data
      const fName = hFormationData[FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.NAME];
      const fLvl = hFormationData[FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL];

      // we skip null, cuz null in {} is true
      if (fName == null) {
        continue;
      }
      if (fName in fData) {
        fData[fName] += fLvl;
      } else {
        fData[fName] = fLvl;
      }
    }
  }

  return fData;
};

const FormationEffectSummary = ({ teamNumber }) => {
  const { watchForm, FORMATIONS_RAW_DATA } = useFormation();

  // console.log('watchedValues', watchedValues);

  // get the team information array from the form data
  // then loop through hero fields of team data
  // and check the formationConfig field of each hero to get the formation they have,
  // and the corresponding formation level
  // should create an object with formation name as the key,
  // and the corresponding formation level as the value
  // the formation lvl should be the sum of each hero's corresponding formation lvl
  const heroFormationData = getFormationLvlMapping({ watchForm, teamNumber });
  // loop through each hero to get the formation effect based on the formation lvl picked over each formation
  // using the formation data from provider
  if (teamNumber == 0) {
    console.log(`heroFormationData ${teamNumber}`, heroFormationData);
  }

  // for each key in the formation, get the corresponding effect by its value, which is lvl, from FORMATIONS_RAW_DATA
  console.log('FORMATIONS_RAW_DATA', FORMATIONS_RAW_DATA);

  return (
    <div>
      FormationEffectSummary: {heroFormationData ? <div>Effects</div> : null}
    </div>
  );
};

export default FormationEffectSummary;
