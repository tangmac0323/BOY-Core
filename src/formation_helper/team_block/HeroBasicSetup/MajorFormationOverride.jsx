import { useMemo } from 'react';
import { Controller } from 'react-hook-form';

// css
import './MajorFormationOverride.css';

// utils
import useFormation from '@src/formation_helper/useFormation';
import {
  FORM_KEYS,
  getSelectedHeroes,
  getHeroFieldName,
  getMajorFormationOverrode,
} from '@src/formation_helper/Utils';

import {
  RAW_FORMATION_OVERRIDE,
  FORMATION_NAME_UUID4_MAPPING,
} from '@src/raw_data/FormationData';
import {
  RAW_HEROES_DATA,
  RAW_HERO_CONFIG_KEYS,
  RAW_HERO_FORMATION_CONFIG_KEYS,
} from '@src/raw_data/HeroData';

// a toggle like component that allow user to switch between original major formation
// and override major formation, this should set the boolean value in the form
// for the field selected by teamNumber and heroIndex, to check if we should
// use the override formation instead of original major formation
// NOTE: since in game, there is only one cateogort of equipable item can change the
//  major formation, thus we can only consider about the boolea solution so far

// this to indicate if the player has the cathedral lvl maxed out
const Toggle = ({ field, teamNumber, heroIndex }) => {
  const { watchForm, setFormValue } = useFormation();
  const onChange = (e) => {
    //update the field value
    field.onChange(e.target.checked);

    const heroFieldName = getHeroFieldName({ teamNumber, heroIndex });
    const curFormConfig = watchForm(
      `${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME}`
    );

    const curMajorFormationID = getMajorFormationOverrode({
      watchForm,
      teamNumber,
      heroIndex,
    });

    console.log('curID', curMajorFormationID);

    if (curFormConfig.length > 0) {
      const majorFormConfig = curFormConfig[0];
      curFormConfig[0] = {
        [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.NAME]: curMajorFormationID,

        [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL]:
          majorFormConfig[FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL],
      };

      console.log(curFormConfig[0]);

      // need to set the first item in the formationsConfig to new MajorFormation
      setFormValue(
        `${heroFieldName}.${FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.KEY_NAME}`,
        curFormConfig
      );
    }
  };

  return (
    <label className="hero-setup-major_formation_override-toggle-switch">
      <input type="checkbox" checked={field.value} onChange={onChange} />
      <span className="hero-setup-major_formation_override-slider"></span>
    </label>
  );
};

const MajorFormationOverride = ({ teamNumber, heroIndex }) => {
  const { control, watchForm } = useFormation();
  const heroFieldName = getHeroFieldName({ teamNumber, heroIndex });

  // get the major formation of the scoped hero
  const {
    selectedHeroesIDs,
    selectedSupportHeroeesCurTeam,
    currentSelectedHeroID,
  } = getSelectedHeroes({
    watchForm,
    teamNumber,
    heroIndex,
  });

  // get hero major formation and override formation
  const [majorFormationID, overrideFormationID] = useMemo(() => {
    if (!currentSelectedHeroID) {
      return [null, null];
    }

    const tempMajorID =
      RAW_HEROES_DATA[currentSelectedHeroID][
        RAW_HERO_CONFIG_KEYS.FORMATION_CONFIG
      ][RAW_HERO_FORMATION_CONFIG_KEYS.MAJOR];

    const tempOverrideID = RAW_FORMATION_OVERRIDE[tempMajorID];

    return [tempMajorID, tempOverrideID];
  }, [currentSelectedHeroID]);

  return (
    <Controller
      name={`${heroFieldName}.${FORM_KEYS.TEAM.HERO.MAJOR_OVERRIDE}`}
      control={control}
      defaultValue={false}
      render={({ field }) => (
        <div className="hero-setup-major_formation_override">
          <label>
            阵线转换
            {majorFormationID &&
              overrideFormationID &&
              `(${FORMATION_NAME_UUID4_MAPPING[majorFormationID]} -> ${FORMATION_NAME_UUID4_MAPPING[overrideFormationID]})`}
            :
          </label>
          <Toggle field={field} teamNumber={teamNumber} heroIndex={heroIndex} />
        </div>
      )}
    />
  );
};

export default MajorFormationOverride;
