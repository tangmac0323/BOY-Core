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
} from '../Utils';

// components
import RotatingButton from '../shared/RotatingButton';

// helper function to calculate the total formation lvl of this hero
// the input is a list
const calculateTotalFormationLvl = (formFormationConfigValues) => {
  let curTotalFormationLvl = 0;

  if (!formFormationConfigValues) return curTotalFormationLvl;

  for (const formFormationConfigValue of formFormationConfigValues) {
    curTotalFormationLvl +=
      formFormationConfigValue[FORM_KEYS.FORMATION_CONFIGURATOR_LVL];
  }

  return curTotalFormationLvl;
};

const FormationLvlConfigurator = ({
  teamNumber,
  heroIndex,
  control,
  selectedHeroName,
}) => {
  const { heroes, formations, formationLvlSelected, watchForm } =
    useFormation();

  // Watch all fields
  const watchedValues = watchForm();
  const curTotalFormationLvl = calculateTotalFormationLvl(
    watchedValues[FORM_KEYS.TEAM][teamNumber][FORM_KEYS.HERO][heroIndex][
      FORM_KEYS.FORMATION_CONFIGURATOR
    ]
  );
  // // this to record how many formation u already picked
  // const [curTotalFormationLvl, setTotalFormationLvl] = useState(0);

  const maxTotalFormationLvl = useMemo(() => {
    const formationLvlKey = `${FORM_KEYS.TEAM}[${teamNumber}].${FORM_KEYS.HERO}[${heroIndex}].${FORM_KEYS.HERO_FORMATION_MAX_LVL}`;
    return formationLvlSelected[formationLvlKey];
  }, [formationLvlSelected]);

  // NOTE: this is temop, the key should based on formation information
  const buttonKeyBase = `${FORM_KEYS.TEAM}[${teamNumber}].${FORM_KEYS.HERO}[${heroIndex}].${FORM_KEYS.FORMATION_CONFIGURATOR}`;

  // get the main formation for the hero
  const defaultForamtionConfig = useMemo(() => {
    if (!selectedHeroName) return null;

    // get the default formation config
    const defaultFormationName =
      heroes[selectedHeroName][DATA_HERO_CONFIG_ENUM.FORMATION_CONFIG][
        DATA_HERO_FORMATION_CONFIG_ENUM.DEFAULT
      ];

    return formations[defaultFormationName];
  }, [selectedHeroName]);

  const extraFormationNames = useMemo(() => {
    if (!selectedHeroName) return null;

    // get the extra formations list
    return heroes[selectedHeroName][DATA_HERO_CONFIG_ENUM.FORMATION_CONFIG][
      DATA_HERO_FORMATION_CONFIG_ENUM.EXTRA
    ];
  }, [selectedHeroName]);

  // get the valid extra_formations for the hero

  const defaultFormationButtonKey = `${buttonKeyBase}[0]`;

  // render the button based on formations
  return (
    <div className="formation-basic">
      {
        // render the button for the main formation
        defaultForamtionConfig ? (
          <Controller
            name={defaultFormationButtonKey}
            control={control}
            defaultValue={{
              [FORM_KEYS.FORMATION_CONFIGURATOR_NAME]: null,
              [FORM_KEYS.FORMATION_CONFIGURATOR_LVL]: 0,
            }}
            render={({ field }) => (
              <RotatingButton
                // buttonKey={defaultFormationButtonKey}
                maxTotalFormationLvl={maxTotalFormationLvl}
                curTotalFormationLvl={curTotalFormationLvl}
                title={defaultForamtionConfig.name}
                count={field.value[FORM_KEYS.FORMATION_CONFIGURATOR_LVL]}
                minCount={HERO_FORMATION_RULE.MIN_DEFAULT_LVL}
                maxCount={
                  defaultForamtionConfig[DATA_FORMATION_CONFIG_ENUM.MAX_LVL]
                }
                field={field}
              />
            )}
          />
        ) : null
      }

      {
        // render the button for the extra formations
        extraFormationNames
          ? extraFormationNames.map((extraFormationName, index) => {
              const curFormationButtonKey = `${buttonKeyBase}[${index + 1}]`;
              const curFormationConfig = formations[extraFormationName];
              return (
                <Controller
                  key={curFormationButtonKey}
                  name={curFormationButtonKey}
                  control={control}
                  defaultValue={{
                    [FORM_KEYS.FORMATION_CONFIGURATOR_NAME]: null,
                    [FORM_KEYS.FORMATION_CONFIGURATOR_LVL]: 0,
                  }}
                  render={({ field }) => (
                    <RotatingButton
                      // buttonKey={curFormationButtonKey}
                      maxTotalFormationLvl={maxTotalFormationLvl}
                      curTotalFormationLvl={curTotalFormationLvl}
                      title={curFormationConfig.name}
                      count={field.value[FORM_KEYS.FORMATION_CONFIGURATOR_LVL]}
                      minCount={HERO_FORMATION_RULE.MIN_EXTRA_LVL}
                      maxCount={
                        curFormationConfig[DATA_FORMATION_CONFIG_ENUM.MAX_LVL]
                      }
                      field={field}
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
  const { heroes } = useFormation();
  const heroDropDownKey = `${FORM_KEYS.TEAM}[${teamNumber}].${FORM_KEYS.HERO}[${heroIndex}].${FORM_KEYS.HERO_NAME}`;
  return (
    <Controller
      name={heroDropDownKey}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <select
          {...field}
          value={field.value || ''}
          onChange={(e) =>
            handleHeroSelect({
              field,
              heroDropDownKey,
              value: e.target.value,
            })
          }
        >
          <option value="" disabled>
            选择一个英雄
          </option>
          {getValidHeroOptions(heroDropDownKey).map((option) => (
            <option key={option} value={option}>
              {`${heroes[option].name} - ${heroes[option].title}`}
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
  const { control, heroes, formationLvlSelected } = useFormation();

  const formationLvlKey = `${FORM_KEYS.TEAM}[${teamNumber}].${FORM_KEYS.HERO}[${heroIndex}].${FORM_KEYS.HERO_FORMATION_MAX_LVL}`;

  // get the max formation lvl for the selected hero
  const maxFormationLvl = useMemo(() => {
    if (!selectedHeroName) return 1;

    return heroes[selectedHeroName][DATA_HERO_CONFIG_ENUM.FORMATION_CONFIG][
      DATA_HERO_FORMATION_CONFIG_ENUM.MAX_LVL
    ];
  }, [selectedHeroName]);

  return (
    <Controller
      name={formationLvlKey}
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
            value={field.value || formationLvlSelected[formationLvlKey]}
            onChange={(e) => {
              const count = parseInt(e.target.value, 10);
              handleFormationLvlSet({ field, formationLvlKey, value: count }); // Update local state to control rendering
            }}
          />
        </>
      )}
    />
  );
};

const HeroSetup = ({ teamNumber, heroIndex }) => {
  // get information from the provider
  const {
    control,
    heroesSelected,
    heroCategories,
    setHeroesSelected,
    setFormationLvlSelected,
  } = useFormation();

  const [selectedHeroName, setSelectedHeroName] = useState();

  // const heroDropDownKey = `${FORM_KEYS.TEAM}[${teamNumber}].${FORM_KEYS.HERO}[${heroIndex}]`;
  // const formationLvlKey = `${FORM_KEYS.TEAM}[${teamNumber}].${FORM_KEYS.HERO}[${heroIndex}].${FORM_KEYS.HERO_FORMATION_MAX_LVL}`;

  //   this function will generate the valid hero options for each team
  const getValidHeroOptions = (curKey) => {
    // get the non empty values from the heroesSelected object
    const selectedValues = Object.values(heroesSelected).filter((v) => v);
    const valieOptions = heroCategories.filter(
      (hero) =>
        hero === heroesSelected[curKey] || !selectedValues.includes(hero)
    );

    return valieOptions;
  };

  // Function to handle dropdown selection
  const handleHeroSelect = ({ field, heroDropDownKey, value }) => {
    setHeroesSelected((prev) => ({
      ...prev,
      [heroDropDownKey]: value,
    }));

    setSelectedHeroName(value);

    // Update react-hook-form's state with field.onChange
    field.onChange(value);
  };

  // Function to handle formation lvl selection
  const handleFormationLvlSet = ({ field, formationLvlKey, value }) => {
    setFormationLvlSelected((prev) => ({
      ...prev,
      [formationLvlKey]: value,
    }));

    // Update react-hook-form's state with field.onChange
    field.onChange(value);
  };
  return (
    <div
      key={`${FORM_KEYS.TEAM}[${teamNumber}].${FORM_KEYS.HERO}[${heroIndex}]`}
      className="hero-setup"
    >
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
          selectedHeroName={selectedHeroName}
        />
      </div>

      {selectedHeroName ? (
        <FormationLvlConfigurator
          teamNumber={teamNumber}
          heroIndex={heroIndex}
          control={control}
          selectedHeroName={selectedHeroName}
        />
      ) : null}
    </div>
  );
};

export default HeroSetup;
