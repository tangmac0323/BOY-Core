import { useState, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';

// hooks
import useFormation from '../useFormation';

// constants
import { FORM_KEYS, HERO_CONFIG_KEY } from '../Utils';

// components
import RotatingButton from '../shared/RotatingButton';

const FormationSelector = () => {
  return (
    <RotatingButton
      buttonKey={'temp'}
      title={'TEST'}
      initNumber={0}
      maxNumber={5}
    />
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

const FormationLvlSelector = ({
  teamNumber,
  heroIndex,
  selectedHeroName,
  handleFormationLvlSet,
}) => {
  const { control, heroes, formationLvlSelected } = useFormation();

  const formationLvlKey = `${FORM_KEYS.TEAM}[${teamNumber}].${FORM_KEYS.HERO}[${heroIndex}].${FORM_KEYS.FORMATION_LVL}`;

  // get the max formation lvl for the selected hero
  const maxFormationLvl = useMemo(() => {
    if (!selectedHeroName) return 1;

    return heroes[selectedHeroName][HERO_CONFIG_KEY.FORMATION_CONFIG][
      HERO_CONFIG_KEY.FORMATION_CONFIG_MAX_LVL
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
  // const formationLvlKey = `${FORM_KEYS.TEAM}[${teamNumber}].${FORM_KEYS.HERO}[${heroIndex}].${FORM_KEYS.FORMATION_LVL}`;

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
        <FormationLvlSelector
          teamNumber={teamNumber}
          heroIndex={heroIndex}
          control={control}
          handleFormationLvlSet={handleFormationLvlSet}
          selectedHeroName={selectedHeroName}
        />
      </div>
      <div className="formation-basic">
        <FormationSelector />
      </div>
    </div>
  );
};

export default HeroSetup;
