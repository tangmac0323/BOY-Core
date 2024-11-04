import { useState, useMemo, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

// hooks
import useFormation from '../useFormation';

// utils
import {
  FORM_KEYS,
  isEmptyObject,
  FORMATION_CATEGORY_ENUM,
  COMBINATION_FORMATION_NAME,
  ColoredText,
} from '@src/formation_helper/Utils';

import {
  RAW_FORMATION_CONFIG_KEYS,
  RAW_FORMATION_DATA,
} from '@src/formation_helper/shared/Utils';

// helper function to get the formation and cumulative formation lvl mapping
const getFormationLvlMapping = ({ watchForm, teamNumber }) => {
  // get the form data
  const watchedValues = watchForm();

  if (isEmptyObject(watchedValues)) return;
  const heroesData =
    watchedValues[FORM_KEYS.TEAM.KEY_NAME][teamNumber][
      FORM_KEYS.TEAM.HERO.KEY_NAME
    ];

  // construct the formationData by iterating through the heroesData
  // the formationData should be a dict with formationName as the key and
  // cumulative level as the value
  const majorFormationCount = new Set();
  const fData = {};
  for (const hData of heroesData) {
    if (!(FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME in hData)) continue;
    const hFormationConfig =
      hData[FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME];

    if (!hFormationConfig) {
      continue;
    }

    // loop through the formation config data to get the formation name and lvl
    for (const hFormationData of hFormationConfig) {
      // get the formation name and formation lvl from the formation config data
      const fName = hFormationData[FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.NAME];
      const fLvl = hFormationData[FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL];

      // we skip null, cuz null in {} is true
      if (fName == null) {
        continue;
      }

      const formationRawData = RAW_FORMATION_DATA[fName];

      // use the set to count the category of major formation in this team
      if (
        formationRawData[RAW_FORMATION_CONFIG_KEYS.CATEGORY] ===
        FORMATION_CATEGORY_ENUM.MAJOR
      ) {
        majorFormationCount.add(
          formationRawData[RAW_FORMATION_CONFIG_KEYS.NAME]
        );

        // add the combination formation to the fData

        fData[COMBINATION_FORMATION_NAME] = majorFormationCount.size;
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

// the heroFormationData in the input should be a dict with formationName as the key and
// cumulative level as the value
const FormationEffect = ({ heroFormationData }) => {
  const formationDataList = Object.entries(heroFormationData);

  return formationDataList.map(([formationName, formationLvl]) => {
    let tempFormationLvl = formationLvl;
    const formationRawData = RAW_FORMATION_DATA[formationName];

    if (formationLvl < 2) {
      return null;
    }
    const maxFormationLvl = formationRawData[RAW_FORMATION_CONFIG_KEYS.MAX_LVL];
    if (formationLvl > maxFormationLvl) {
      tempFormationLvl = maxFormationLvl;
    }

    const effectDetailDescriptionHandler =
      formationRawData[RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER];

    return (
      <div key={`${formationName}-${tempFormationLvl}`}>
        {`${formationName}(LVL`}
        <ColoredText color="blue" text={tempFormationLvl} />
        {`/`}
        <ColoredText color="blue" text={maxFormationLvl} />
        {`) - `}
        {effectDetailDescriptionHandler(formationLvl)}
      </div>
    );
  });
};

const FormationEffectSummary = ({ teamNumber }) => {
  const { watchForm } = useFormation();

  // get the team information array from the form data
  // then loop through hero fields of team data
  // and check the formationConfig field of each hero to get the formation they have,
  // and the corresponding formation level
  // should create an object with formation name as the key,
  // and the corresponding formation level as the value
  // the formation lvl should be the sum of each hero's corresponding formation lvl
  const heroFormationData = useMemo(
    () =>
      getFormationLvlMapping({
        watchForm,
        teamNumber,
      }),
    [watchForm, teamNumber]
  );

  return (
    <div key={teamNumber}>
      FormationEffectSummary:
      {heroFormationData ? (
        <FormationEffect heroFormationData={heroFormationData} />
      ) : null}
    </div>
  );
};

export default FormationEffectSummary;
