import { useEffect, useState } from 'react';

// hooks
import useFormation from '../useFormation';

// css
import './RotatingButton.css';

// constants
import { FORM_KEYS } from '../Utils';
import { RAW_FORMATION_CONFIG_KEYS } from '@src/formation_helper/shared/FormationData';

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
  formationConfig,
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

  return (
    <div className="rotating-button">
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
