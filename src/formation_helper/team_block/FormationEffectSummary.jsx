import { useMemo } from 'react';

// hooks
import useFormation from '../useFormation';

// utils
import {
  FORM_KEYS,
  isEmptyObject,
  FORMATION_CATEGORY_ENUM,
  COMBINATION_FORMATION_NAME,
  ColoredText,
  getMajorFormationOverrode,
} from '@src/formation_helper/Utils';

import {
  RAW_FORMATION_CONFIG_KEYS,
  RAW_FORMATION_DATA,
  FORMATION_NAME_UUID4_REVERSE_MAPPING,
} from '@src/raw_data/FormationData';

// helper function to initialize fData in getFormationLvlMapping
// only with Major
const initializeFormationData = ({ cathedralBonus }) => {
  const fData = {};
  if (cathedralBonus) {
    //  if the flag is on, initialize with all major foramtion with lvl 1
    for (const formationID in RAW_FORMATION_DATA) {
      if (
        RAW_FORMATION_DATA[formationID][RAW_FORMATION_CONFIG_KEYS.CATEGORY] ===
        FORMATION_CATEGORY_ENUM.MAJOR
      ) {
        fData[formationID] = 1;
      }
    }
  }

  return fData;
};

// helper function to get the formation and cumulative formation lvl mapping
const getFormationLvlMapping = ({ watchForm, teamNumber }) => {
  // get the form data
  const watchedValues = watchForm();

  // check if cathedral bonus is enabled
  const cathedralBonus = watchedValues[FORM_KEYS.CATHEDRAL_BONUS];

  if (isEmptyObject(watchedValues)) return;
  const heroesData = watchForm(
    `${FORM_KEYS.TEAM.KEY_NAME}[${teamNumber}].${FORM_KEYS.TEAM.HERO.KEY_NAME}`
  );

  // construct the formationData by iterating through the heroesData
  // the formationData should be a dict with formationName as the key and
  // cumulative level as the value
  const majorFormationCount = new Set();
  const fData = initializeFormationData({ cathedralBonus });

  if (!heroesData) {
    return fData;
  }

  for (const [heroIndex, hData] of heroesData.entries()) {
    if (!(FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME in hData)) continue;

    // check if there is override
    // only the first is major
    const hasOverride = watchForm(
      `${FORM_KEYS.TEAM.KEY_NAME}[${teamNumber}].${FORM_KEYS.TEAM.HERO.KEY_NAME}[${heroIndex}].${FORM_KEYS.TEAM.HERO.MAJOR_OVERRIDE}`
    );

    const hFormationConfig =
      hData[FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME];

    if (!hFormationConfig) {
      continue;
    }

    // loop through the formation config data to get the formation name and lvl
    for (const hFormationData of hFormationConfig) {
      if (!hFormationData) continue;

      // get the formation name and formation lvl from the formation config data
      const formationID = hasOverride
        ? getMajorFormationOverrode({ watchForm, teamNumber, heroIndex })
        : hFormationData[FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.NAME];

      const fLvl = hFormationData[FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL];

      // we skip null, cuz null in {} is true
      if (!formationID) {
        continue;
      }

      const formationRawData = RAW_FORMATION_DATA[formationID];

      // use the set to count the category of major formation in this team
      if (
        formationRawData[RAW_FORMATION_CONFIG_KEYS.CATEGORY] ===
        FORMATION_CATEGORY_ENUM.MAJOR
      ) {
        majorFormationCount.add(
          formationRawData[RAW_FORMATION_CONFIG_KEYS.NAME]
        );

        // add the combination formation to the fData

        fData[
          FORMATION_NAME_UUID4_REVERSE_MAPPING[COMBINATION_FORMATION_NAME]
        ] = majorFormationCount.size;
      }

      if (formationID in fData) {
        fData[formationID] += fLvl;
      } else {
        fData[formationID] = fLvl;
      }
    }
  }

  return fData;
};

// the heroFormationData in the input should be a dict with formationName as the key and
// cumulative level as the value
const FormationEffect = ({ watchForm, teamNumber }) => {
  const display_list = useMemo(() => {
    const heroFormationData = getFormationLvlMapping({
      watchForm,
      teamNumber,
    });

    const formationDataList = heroFormationData
      ? Object.entries(heroFormationData)
      : [];

    const display_list = formationDataList.map(
      ([formationID, formationLvl]) => {
        let curFormationLvl = formationLvl;
        const formationRawData = RAW_FORMATION_DATA[formationID];

        // this decide the opacity of the effect detail description
        // if there is no effect activated, it should be transparent
        const displayClassName = ['padding-3', 'margin-5', 'font-size-13'];

        let hasEffect = false;
        if (
          curFormationLvl <
          formationRawData[RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]
        ) {
          displayClassName.push('opacity-70');
        } else {
          displayClassName.push('opacity-100');
          hasEffect = true;
        }
        const maxFormationLvl =
          formationRawData[RAW_FORMATION_CONFIG_KEYS.MAX_LVL];

        const effectDetailDescriptionHandler =
          formationRawData[
            RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER
          ];

        let formationLvlColor = 'blue';
        // set the current formation lvl color and border color
        if (curFormationLvl == maxFormationLvl) {
          displayClassName.push('boder-light-green');
          formationLvlColor = 'green';
        } else if (curFormationLvl > maxFormationLvl) {
          displayClassName.push('boder-light-red');
          formationLvlColor = 'red';
        } else {
          displayClassName.push('boder-light-blue');
        }

        return {
          curFormationLvl,
          comp: (
            <div
              key={`${formationID}-${curFormationLvl}`}
              className={displayClassName.join(' ')}
            >
              <b>{`${formationRawData[RAW_FORMATION_CONFIG_KEYS.NAME]}`}</b>
              {`  (等级`}
              <ColoredText color={formationLvlColor} text={curFormationLvl} />
              {`/`}
              <ColoredText color="blue" text={maxFormationLvl} />
              {`) - `}
              {hasEffect
                ? effectDetailDescriptionHandler(formationLvl)
                : '效果未激活'}
            </div>
          ),
        };
      }
    );

    display_list.sort((a, b) => b.curFormationLvl - a.curFormationLvl);

    return display_list;
  }, [watchForm, teamNumber]);

  return display_list.map(({ comp }) => comp);
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

  return (
    <div key={teamNumber}>
      阵线总结:
      <FormationEffect watchForm={watchForm} teamNumber={teamNumber} />
    </div>
  );
};

export default FormationEffectSummary;
