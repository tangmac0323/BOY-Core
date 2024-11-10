import { useMemo } from 'react';
import { Controller } from 'react-hook-form';

// hooks
import useFormation from '@src/formation_helper/useFormation';

// components
import RotatingButton from '@src/formation_helper/shared/RotatingButton';

// utils
import {
  FORM_KEYS,
  HERO_FORMATION_RULE,
  getSelectedMaxFormationLvl,
  calculateTotalFormationLvl,
  getSelectedHeroes,
  getHeroFieldName,
} from '@src/formation_helper/Utils';

import {
  RAW_FORMATION_CONFIG_KEYS,
  RAW_FORMATION_DATA,
} from '@src/raw_data/FormationData';
import {
  RAW_HEROES_DATA,
  RAW_HERO_CONFIG_KEYS,
  RAW_HERO_FORMATION_CONFIG_KEYS,
} from '@src/raw_data/HeroData';

// NOTE: hard code here to use the first formation in the list, as it should always be the major foramtion
const getFormationLvl = ({ curFormationInfo, formationID }) => {
  if (!curFormationInfo) return 0;
  for (const formationInfo of curFormationInfo) {
    if (!formationInfo) continue;
    if (formationInfo.name === formationID) {
      return formationInfo.level;
    }
  }

  return 0;
};

const FormationLvlConfigurator = ({
  teamNumber,
  heroIndex,
  control,
  selectedHeroID,
}) => {
  const { watchForm } = useFormation();

  const heroFieldName = getHeroFieldName({ teamNumber, heroIndex });

  // Watch all fields
  const curTotalFormationLvl = useMemo(
    () =>
      calculateTotalFormationLvl({
        teamNumber,
        heroIndex,
        watchForm,
      }),
    [watchForm]
  );

  const heroSelectedMaxFormationLvl = useMemo(
    () =>
      getSelectedMaxFormationLvl({
        watchForm,
        teamNumber,
        heroIndex,
      }),
    [watchForm]
  );

  // get the main formation for the hero
  const { rawMajorForamtionConfig, extraFormationIDs } = useMemo(() => {
    if (!selectedHeroID) return {};

    // get the major formation config
    const majorFormationID =
      RAW_HEROES_DATA[selectedHeroID][RAW_HERO_CONFIG_KEYS.FORMATION_CONFIG][
        RAW_HERO_FORMATION_CONFIG_KEYS.MAJOR
      ];

    const tempExtraFormationIDs =
      RAW_HEROES_DATA[selectedHeroID][RAW_HERO_CONFIG_KEYS.FORMATION_CONFIG][
        RAW_HERO_FORMATION_CONFIG_KEYS.EXTRA
      ];

    return {
      rawMajorForamtionConfig: RAW_FORMATION_DATA[majorFormationID],
      extraFormationIDs: tempExtraFormationIDs,
    };
  }, [selectedHeroID]);

  // get the valid extra_formations for the hero
  const buttonKeyBase = `${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME}`;

  // get the current default formation lvl from form state
  const curFormationInfo = watchForm(
    `${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME}`
  );

  // get the current major foramtion lvl
  const curMajorFormationLvl = getFormationLvl({
    curFormationInfo,
    formationID: rawMajorForamtionConfig?.[RAW_FORMATION_CONFIG_KEYS.UUID4],
  });

  // render the button based on FORMATIONS_RAW_DATA
  return (
    <div className="formation-basic">
      {
        // render the button for the main formation

        <Controller
          name={`${buttonKeyBase}[0]`}
          control={control}
          defaultValue={{
            [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.NAME]: null,
            [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL]: 0,
          }}
          render={({ field }) =>
            rawMajorForamtionConfig ? (
              <RotatingButton
                maxTotalFormationLvl={heroSelectedMaxFormationLvl}
                curTotalFormationLvl={curTotalFormationLvl}
                formationConfig={rawMajorForamtionConfig}
                count={curMajorFormationLvl}
                minCount={HERO_FORMATION_RULE.MIN_MAJOR_LVL}
                maxCount={
                  rawMajorForamtionConfig[RAW_FORMATION_CONFIG_KEYS.MAX_LVL]
                }
                field={field}
              />
            ) : null
          }
        />
      }

      {
        // render the button for the extra FORMATIONS_RAW_DATA
        extraFormationIDs
          ? extraFormationIDs.map((extraFormationID, index) => {
              const curFormationButtonKey = `${buttonKeyBase}[${index + 1}]`;
              const curFormationConfig = RAW_FORMATION_DATA[extraFormationID];

              return (
                <Controller
                  key={curFormationButtonKey}
                  name={curFormationButtonKey}
                  control={control}
                  defaultValue={{
                    [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.NAME]: null,
                    [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL]: 0,
                  }}
                  render={({ field }) => (
                    <RotatingButton
                      maxTotalFormationLvl={heroSelectedMaxFormationLvl}
                      curTotalFormationLvl={curTotalFormationLvl}
                      formationConfig={curFormationConfig}
                      count={getFormationLvl({
                        curFormationInfo,
                        formationID: extraFormationID,
                      })}
                      minCount={HERO_FORMATION_RULE.MIN_EXTRA_LVL}
                      maxCount={HERO_FORMATION_RULE.MAX_EXTRA_LVL}
                      field={field}
                      // NOTE: we disable the extra formation if the major formation is less than 4
                      disabled={
                        curMajorFormationLvl <
                        HERO_FORMATION_RULE.UNLOCK_EXTRA_LVL
                      }
                    />
                  )}
                />
              );
            })
          : null
      }
    </div>
  );
};

const HeroSelector = ({
  teamNumber,
  heroIndex,
  control,
  handleHeroSelect,
  getValidHeroOptions,
}) => {
  // get hero information from the provider
  const heroFieldName = getHeroFieldName({ teamNumber, heroIndex });
  const formFieldName = `${heroFieldName}.${FORM_KEYS.TEAM.HERO.NAME}`;
  return (
    <Controller
      name={formFieldName}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <select
          {...field}
          value={field.value || ''}
          onChange={(e) =>
            handleHeroSelect({
              field,
              value: e.target.value,
            })
          }
        >
          <option value="" disabled>
            选择一个英雄
          </option>
          {getValidHeroOptions(formFieldName).map((option) => {
            const label = `${
              RAW_HEROES_DATA[option][RAW_HERO_CONFIG_KEYS.RARITY]
            } - ${RAW_HEROES_DATA[option][RAW_HERO_CONFIG_KEYS.NAME]} - ${
              RAW_HEROES_DATA[option][RAW_HERO_CONFIG_KEYS.TITLE]
            }`;
            return (
              <option key={option} value={option}>
                {label}
              </option>
            );
          })}
        </select>
      )}
    />
  );
};

const HeroFormationMaxLvlSelector = ({
  teamNumber,
  heroIndex,
  selectedHeroID,
  handleFormationLvlSet,
}) => {
  const { control, watchForm } = useFormation();

  const formFieldName = `${getHeroFieldName({ teamNumber, heroIndex })}.${
    FORM_KEYS.TEAM.HERO.FORMATION_MAX_LVL
  }`;

  const curHeroSelectedMaxFormationLvl = getSelectedMaxFormationLvl({
    watchForm,
    teamNumber,
    heroIndex,
  });

  // get the max formation lvl for the selected hero from the raw data
  const maxFormationLvl = useMemo(() => {
    if (!selectedHeroID) return 1;

    return RAW_HEROES_DATA[selectedHeroID][
      RAW_HERO_CONFIG_KEYS.FORMATION_CONFIG
    ][RAW_FORMATION_CONFIG_KEYS.MAX_LVL];
  }, [selectedHeroID]);

  return (
    <Controller
      name={formFieldName}
      control={control}
      defaultValue={1}
      render={({ field }) => (
        <>
          <label>
            阵线等级: {field.value}/{maxFormationLvl}
          </label>
          <input
            type="range"
            min="1"
            max={maxFormationLvl}
            {...field}
            value={field.value || curHeroSelectedMaxFormationLvl}
            onChange={(e) => {
              const count = parseInt(e.target.value, 10);
              handleFormationLvlSet({ field, value: count }); // Update local state to control rendering
            }}
          />
        </>
      )}
    />
  );
};

const HeroSetup = ({ teamNumber, heroIndex }) => {
  // get information from the provider
  const { control, HERO_UUID4_LIST, watchForm, setFormValue } = useFormation();

  const heroFieldName = getHeroFieldName({ teamNumber, heroIndex });

  const { selectedHeroeIDs, currentSelectedHeroID } = getSelectedHeroes({
    watchForm,
    teamNumber,
    heroIndex,
  });

  //   this function will generate the valid hero options for each team
  const getValidHeroOptions = () => {
    // watchedValues;
    // get the non empty values from the form state
    const valieOptions = HERO_UUID4_LIST.filter(
      (heroID) =>
        heroID === currentSelectedHeroID || !selectedHeroeIDs.includes(heroID)
    );

    return valieOptions;
  };

  // Function to handle dropdown selection
  const handleHeroSelect = ({ field, value }) => {
    // Update react-hook-form's state with field.onChange
    field.onChange(value);
    // reset the max formation lvl selected for this hero in form
    setFormValue(
      `${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_MAX_LVL}`,
      1
    );

    const majorFormationId =
      RAW_HEROES_DATA[value][RAW_HERO_CONFIG_KEYS.FORMATION_CONFIG][
        RAW_HERO_FORMATION_CONFIG_KEYS.MAJOR
      ];

    // reset the formation config in form to major formation with lvl 1
    setFormValue(
      `${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME}`,
      [{ name: majorFormationId, level: 1 }]
    );
  };

  // Function to handle formation lvl selection
  const handleFormationLvlSet = ({ field, value }) => {
    // Update react-hook-form's state with field.onChange
    field.onChange(value);

    const heroID = watchForm(`${heroFieldName}.${FORM_KEYS.TEAM.HERO.NAME}`);

    const majorFormationID =
      RAW_HEROES_DATA[heroID][RAW_HERO_CONFIG_KEYS.FORMATION_CONFIG][
        RAW_HERO_FORMATION_CONFIG_KEYS.MAJOR
      ];

    // reset the formation config in form
    setFormValue(
      `${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME}`,
      [{ name: majorFormationID, level: 1 }]
    );
  };

  return (
    <div key={heroFieldName} className="hero-setup">
      <div className="hero-basic team-block-item">
        <HeroSelector
          teamNumber={teamNumber}
          heroIndex={heroIndex}
          control={control}
          handleHeroSelect={handleHeroSelect}
          getValidHeroOptions={getValidHeroOptions}
        />
        {/* Slider to set the number of extra dropdowns */}
        <HeroFormationMaxLvlSelector
          teamNumber={teamNumber}
          heroIndex={heroIndex}
          control={control}
          handleFormationLvlSet={handleFormationLvlSet}
          selectedHeroID={currentSelectedHeroID}
        />
      </div>

      <FormationLvlConfigurator
        teamNumber={teamNumber}
        heroIndex={heroIndex}
        control={control}
        selectedHeroID={currentSelectedHeroID}
      />
    </div>
  );
};

export default HeroSetup;
