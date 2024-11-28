import { useMemo } from 'react';
import { Controller } from 'react-hook-form';

// css
import './TeamBlock.css';

// hooks
import useFormation from '@src/formation_helper/useFormation';

// components
import RotatingButton from '@src/formation_helper/shared/RotatingButton/RotatingButton';
import MajorFormationOverride from '@src/formation_helper/team_block/HeroBasicSetup/MajorFormationOverride';

// utils
import {
  FORM_KEYS,
  HERO_FORMATION_RULE,
  getSelectedMaxFormationLvl,
  calculateTotalFormationLvl,
  getSelectedHeroes,
  getHeroFieldName,
  getTriggerableFormationIDsInTeam,
  getMajorFormationOverrode,
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
import { resetHero } from './Utils';

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
  const triggerableFormationIDs = getTriggerableFormationIDsInTeam({
    watchForm,
    teamNumber,
  });

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
  const { majorFormationID, extraFormationIDs } = useMemo(() => {
    if (!selectedHeroID) return {};

    // get the major formation config
    const majorFormationID =
      RAW_HEROES_DATA[selectedHeroID][RAW_HERO_CONFIG_KEYS.FORMATION_CONFIG][
        RAW_HERO_FORMATION_CONFIG_KEYS.MAJOR
      ];

    // we should use the overrode one if there is override
    // const majorFormationID = getMajorFormationOverrode({
    //   watchForm,
    //   teamNumber,
    //   heroIndex,
    // });

    const tempExtraFormationIDs =
      RAW_HEROES_DATA[selectedHeroID][RAW_HERO_CONFIG_KEYS.FORMATION_CONFIG][
        RAW_HERO_FORMATION_CONFIG_KEYS.EXTRA
      ];

    return {
      majorFormationID,
      // rawMajorForamtionConfig: RAW_FORMATION_DATA[majorFormationID],
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
    formationID: majorFormationID,
  });

  // render the button based on FORMATIONS_RAW_DATA
  return (
    <div className="formation-basic">
      {
        // render the button for the main formation

        <Controller
          name={`${buttonKeyBase}[0]`}
          control={control}
          render={({ field }) =>
            majorFormationID ? (
              <RotatingButton
                isMajor={true}
                maxTotalFormationLvl={heroSelectedMaxFormationLvl}
                curTotalFormationLvl={curTotalFormationLvl}
                // formationConfig={rawMajorForamtionConfig}
                formationID={majorFormationID}
                count={curMajorFormationLvl}
                minCount={HERO_FORMATION_RULE.MIN_MAJOR_LVL}
                // maxCount={
                //   rawMajorForamtionConfig[RAW_FORMATION_CONFIG_KEYS.MAX_LVL]
                // }
                field={field}
                triggerable={true}
                teamNumber={teamNumber}
                heroIndex={heroIndex}
                watchForm={watchForm}
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
              // const curFormationConfig = RAW_FORMATION_DATA[extraFormationID];
              return (
                <Controller
                  key={curFormationButtonKey}
                  name={curFormationButtonKey}
                  control={control}
                  // defaultValue={{
                  //   [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.NAME]: null,
                  //   [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL]: 0,
                  // }}
                  render={({ field }) => (
                    <RotatingButton
                      isMajor={false}
                      maxTotalFormationLvl={heroSelectedMaxFormationLvl}
                      curTotalFormationLvl={curTotalFormationLvl}
                      // formationConfig={curFormationConfig}
                      formationID={extraFormationID}
                      count={getFormationLvl({
                        curFormationInfo,
                        formationID: extraFormationID,
                      })}
                      minCount={HERO_FORMATION_RULE.MIN_EXTRA_LVL}
                      // maxCount={HERO_FORMATION_RULE.MAX_EXTRA_LVL}
                      field={field}
                      // NOTE: we disable the extra formation if the major formation is less than 4
                      disabled={
                        curMajorFormationLvl <
                        HERO_FORMATION_RULE.UNLOCK_EXTRA_LVL
                      }
                      triggerable={triggerableFormationIDs.includes(
                        extraFormationID
                      )}
                      teamNumber={teamNumber}
                      heroIndex={heroIndex}
                      watchForm={watchForm}
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
          className="hero-setup-hero_selector"
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

// isSupport means if this hero is in support team not in formal team
const HeroSetup = ({ teamNumber, heroIndex, isSupport }) => {
  // get information from the provider
  const { control, HERO_UUID4_LIST, watchForm, setFormValue } = useFormation();

  const heroFieldName = getHeroFieldName({ teamNumber, heroIndex });

  const {
    selectedHeroesIDs,
    selectedSupportHeroeesCurTeam,
    currentSelectedHeroID,
  } = getSelectedHeroes({
    watchForm,
    teamNumber,
    heroIndex,
    isSupport,
  });

  //   this function will generate the valid hero options for each team
  const getValidHeroOptions = () => {
    // watchedValues;
    // get the non empty values from the form state
    let valieOptions = HERO_UUID4_LIST.filter(
      (heroID) =>
        heroID === currentSelectedHeroID || !selectedHeroesIDs.includes(heroID)
    );

    if (isSupport) {
      // if this is a support hero selector, we also dont allow select the hero which is in the support position in the same team
      for (const heroInfo of selectedSupportHeroeesCurTeam) {
        valieOptions = valieOptions.filter(
          (heroID) => heroID !== heroInfo.ID || heroID === currentSelectedHeroID
        );
      }
    }

    return valieOptions;
  };

  // Function to handle dropdown selection
  const handleHeroSelect = ({ field, value }) => {
    // Update react-hook-form's state with field.onChange
    field.onChange(value);
    // --------------------------- prefeed formation default data --------------------------
    resetHero({ heroFieldName, heroID: value, setFormValue });
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
    // if the max formation lvl is equal or larger than 4, we set the major to 4
    if (value >= HERO_FORMATION_RULE.UNLOCK_EXTRA_LVL) {
      setFormValue(
        `${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME}`,
        [
          {
            name: majorFormationID,
            level: HERO_FORMATION_RULE.UNLOCK_EXTRA_LVL,
          },
        ]
      );
    } else {
      setFormValue(
        `${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME}`,
        [{ name: majorFormationID, level: 1 }]
      );
    }
  };

  return (
    <div
      key={heroFieldName}
      className={`hero-setup border-radius-10 ${
        currentSelectedHeroID ? 'boder-light-purple' : ''
      }`}
    >
      <div className="hero-basic team-block-item">
        <HeroSelector
          teamNumber={teamNumber}
          heroIndex={heroIndex}
          control={control}
          handleHeroSelect={handleHeroSelect}
          getValidHeroOptions={getValidHeroOptions}
        />
        <MajorFormationOverride
          teamNumber={teamNumber}
          heroIndex={heroIndex}
          control={control}
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
