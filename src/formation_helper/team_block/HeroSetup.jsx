import { useState, useMemo, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

// hooks
import useFormation from '@src/formation_helper/useFormation';

// components
import RotatingButton from '@src/formation_helper/shared/RotatingButton';

// utils
import {
  FORM_KEYS,
  RAW_DATA_HERO_CONFIG_KEYS,
  RAW_DATA_HERO_FORMATION_CONFIG_KEYS,
  HERO_FORMATION_RULE,
  isEmptyObject,
  getSelectedMaxFormationLvl,
  calculateTotalFormationLvl,
  getSelectedHeroes,
  getHeroFieldName,
} from '@src/formation_helper/Utils';

import { RAW_FORMATION_CONFIG_KEYS } from '@src/formation_helper/shared/Utils';

// NOTE: hard code here to use the first formation in the list, as it should always be the major foramtion
const getFormationLvl = ({ curFormationInfo, formationIndex }) => {
  if (!curFormationInfo) return 0;
  if (curFormationInfo.length <= formationIndex) return 0;
  return curFormationInfo[formationIndex][
    FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL
  ];
};

const FormationLvlConfigurator = ({
  teamNumber,
  heroIndex,
  control,
  selectedHeroName,
}) => {
  const { HEROES_RAW_DATA, FORMATIONS_RAW_DATA, watchForm } = useFormation();

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
  const majorForamtionConfig = useMemo(() => {
    if (!selectedHeroName) return null;

    // get the major formation config
    const defaultFormationName =
      HEROES_RAW_DATA[selectedHeroName][
        RAW_DATA_HERO_CONFIG_KEYS.FORMATION_CONFIG
      ][RAW_DATA_HERO_FORMATION_CONFIG_KEYS.MAJOR];

    return FORMATIONS_RAW_DATA[defaultFormationName];
  }, [selectedHeroName]);

  const extraFormationNames = useMemo(() => {
    if (!selectedHeroName) return null;

    // get the extra FORMATIONS_RAW_DATA list
    return HEROES_RAW_DATA[selectedHeroName][
      RAW_DATA_HERO_CONFIG_KEYS.FORMATION_CONFIG
    ][RAW_DATA_HERO_FORMATION_CONFIG_KEYS.EXTRA];
  }, [selectedHeroName]);

  // get the valid extra_formations for the hero
  const buttonKeyBase = `${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME}`;

  // get the current default formation lvl from form state
  const curFormationInfo = watchForm(
    `${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME}`
  );

  // get the current major foramtion lvl
  const curMajorFormationLvl = getFormationLvl({
    curFormationInfo,
    formationIndex: 0,
  });

  // render the button based on FORMATIONS_RAW_DATA
  return (
    <div className="formation-basic">
      {
        // render the button for the main formation
        majorForamtionConfig ? (
          <Controller
            name={`${buttonKeyBase}[0]`}
            control={control}
            defaultValue={{
              [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.NAME]: null,
              [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL]: 0,
            }}
            render={({ field }) => (
              <RotatingButton
                maxTotalFormationLvl={heroSelectedMaxFormationLvl}
                curTotalFormationLvl={curTotalFormationLvl}
                title={majorForamtionConfig.name}
                count={curMajorFormationLvl}
                // count={field.value[FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL]}
                minCount={HERO_FORMATION_RULE.MIN_MAJOR_LVL}
                maxCount={
                  majorForamtionConfig[RAW_FORMATION_CONFIG_KEYS.MAX_LVL]
                }
                field={field}
              />
            )}
          />
        ) : null
      }

      {
        // render the button for the extra FORMATIONS_RAW_DATA
        extraFormationNames
          ? extraFormationNames.map((extraFormationName, index) => {
              const curFormationButtonKey = `${buttonKeyBase}[${index + 1}]`;
              const curFormationConfig =
                FORMATIONS_RAW_DATA[extraFormationName];

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
                      title={curFormationConfig.name}
                      count={getFormationLvl({
                        curFormationInfo,
                        formationIndex: index + 1,
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
  const { HEROES_RAW_DATA } = useFormation();
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
          {getValidHeroOptions(formFieldName).map((option) => (
            <option key={option} value={option}>
              {`${HEROES_RAW_DATA[option].name} - ${HEROES_RAW_DATA[option].title}`}
            </option>
          ))}
        </select>
      )}
    />
  );
};

const HeroFormationMaxLvlSelector = ({
  teamNumber,
  heroIndex,
  selectedHeroName,
  handleFormationLvlSet,
}) => {
  const { control, HEROES_RAW_DATA, watchForm } = useFormation();

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
    if (!selectedHeroName) return 1;

    return HEROES_RAW_DATA[selectedHeroName][
      RAW_DATA_HERO_CONFIG_KEYS.FORMATION_CONFIG
    ][RAW_DATA_HERO_FORMATION_CONFIG_KEYS.MAX_LVL];
  }, [selectedHeroName]);

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
  const { control, heroCategories, watchForm, setFormValue } = useFormation();

  const heroFieldName = getHeroFieldName({ teamNumber, heroIndex });

  const { selectedHeroes, currentSelectedHero } = getSelectedHeroes({
    watchForm,
    teamNumber,
    heroIndex,
  });

  //   this function will generate the valid hero options for each team
  const getValidHeroOptions = () => {
    // watchedValues;
    // get the non empty values from the form state
    const valieOptions = heroCategories.filter(
      (hero) => hero === currentSelectedHero || !selectedHeroes.includes(hero)
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

    // reset the formation config in form
    setFormValue(
      `${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME}`
    );
  };

  // Function to handle formation lvl selection
  const handleFormationLvlSet = ({ field, value }) => {
    // Update react-hook-form's state with field.onChange
    field.onChange(value);

    // reset the formation config in form
    setFormValue(
      `${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME}`
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
          selectedHeroName={currentSelectedHero}
        />
      </div>

      <FormationLvlConfigurator
        teamNumber={teamNumber}
        heroIndex={heroIndex}
        control={control}
        selectedHeroName={currentSelectedHero}
      />
    </div>
  );
};

export default HeroSetup;
