import { useEffect, useState } from 'react';

// hooks
import useFormation from '../useFormation';

// css
import './RotatingButton.css';

// constants
import { FORM_KEYS, isNumber } from '../Utils';

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
  title,
  count,
  minCount,
  maxCount,
  maxTotalFormationLvl,
  curTotalFormationLvl,
  field,
  disabled = false,
}) => {
  const disableDecremental = count <= minCount;
  const disabledIncremental = isExceedMaxTotalFormationLvl({
    maxCount,
    count,
    maxTotalFormationLvl,
    curTotalFormationLvl,
  });

  // alter the value
  useEffect(() => {
    // need to check if the count is a numbe here
    // as it could be undefined whne the extra formation is not set
    if (isNumber(count) && count < minCount) {
      // construct the field value
      field.onChange({
        [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.NAME]: title,
        [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL]: minCount,
      });
    }
  }, [field, minCount]);

  // Handle left-click to increment the number on each button
  const handleIncrement = () => {
    const newCount = count + 1;
    field.onChange({
      [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.NAME]: title,
      [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL]: newCount,
    });
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    field.onChange({
      [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.NAME]: title,
      [FORM_KEYS.TEAM.HERO.FORMATION_CONFIG.LEVEL]: newCount,
    });
  };

  const displayCount = count < minCount ? minCount : count;

  return (
    <div className="rotating-button">
      {title}:
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
