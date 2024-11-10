// css
import './RotatingButton.css';

// constants
import { FORM_KEYS, HERO_FORMATION_RULE } from '../Utils';
import { RAW_FORMATION_CONFIG_KEYS } from '@src/raw_data/FormationData';

// helper function to check if exceeding the max total formation lvl
const isExceedMaxTotalFormationLvl = ({
  maxCount,
  count,
  maxTotalFormationLvl,
  curTotalFormationLvl,
}) => {
  // current formation should not exceed the formation max lvl
  if (count >= maxCount) {
    return true;
  }

  // the total formation lvl should not exceed the max total formation lvl
  if (curTotalFormationLvl >= maxTotalFormationLvl) {
    return true;
  }

  return false;

  // calculate the total formation lvl for the field value
};

const RotatingButton = ({
  isMajor,
  formationConfig,
  count,
  minCount,
  maxCount,
  maxTotalFormationLvl,
  curTotalFormationLvl,
  field,
  disabled = false,
}) => {
  // ------------------------- disable deremental -------------------------
  let disableDecremental = count <= minCount;
  // if this is a major formation
  // we dont allow decremental, if the maxTotalFormationLvl is larger than the extra unlock lvl
  if (isMajor && maxTotalFormationLvl >= HERO_FORMATION_RULE.UNLOCK_EXTRA_LVL) {
    disableDecremental = true;
  }

  // ------------------------- disable incremental -------------------------
  const disabledIncremental = isExceedMaxTotalFormationLvl({
    maxCount,
    count,
    maxTotalFormationLvl,
    curTotalFormationLvl,
  });

  // Handle left-click to increment the number on each button
  const handleIncrement = () => {
    const newCount = count + 1;
    field.onChange({
      [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.NAME]:
        formationConfig[RAW_FORMATION_CONFIG_KEYS.UUID4],
      [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL]: newCount,
    });
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    field.onChange({
      [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.NAME]:
        formationConfig[RAW_FORMATION_CONFIG_KEYS.UUID4],
      [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL]: newCount,
    });
  };

  const displayCount = count < minCount ? minCount : count;

  // if there is value in this formation
  // high light it with blue
  const isHighlighted = field.value.level > 0;

  return (
    <div
      className={`${isHighlighted ? 'boder-light-blue' : null} rotating-button`}
    >
      {formationConfig[RAW_FORMATION_CONFIG_KEYS.NAME]}:
      <div className="rotating-button-control">
        <button
          type="button"
          onClick={handleDecrement}
          disabled={disabled || disableDecremental}
        >
          -
        </button>
        <span className="rotating-button-display">{displayCount}</span>
        <button
          type="button"
          onClick={handleIncrement}
          disabled={disabled || disabledIncremental}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default RotatingButton;
