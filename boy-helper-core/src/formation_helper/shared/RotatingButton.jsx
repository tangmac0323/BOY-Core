import { useEffect, useState } from 'react';

// hooks
import useFormation from '../useFormation';

// css
import './RotatingButton.css';

// constants
import { FORM_KEYS } from '../Utils';

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
}) => {
  // // const [buttonValue, setButtonValue] = useState(initCount);
  // const [isIncrementalDisabled, setIsIncrementalDisabled] = useState();
  const disableDecremental = count <= minCount;
  const disabledIncremental = isExceedMaxTotalFormationLvl({
    maxCount,
    count,
    maxTotalFormationLvl,
    curTotalFormationLvl,
  });

  // alter the value
  useEffect(() => {
    if (count < minCount) {
      // construct the field value
      field.onChange({
        [FORM_KEYS.FORMATION_CONFIGURATOR_NAME]: title,
        [FORM_KEYS.FORMATION_CONFIGURATOR_LVL]: minCount,
      });
    }
  }, [field, minCount]);

  // Handle left-click to increment the number on each button
  const handleIncrement = () => {
    const newCount = count + 1;
    field.onChange({
      [FORM_KEYS.FORMATION_CONFIGURATOR_NAME]: title,
      [FORM_KEYS.FORMATION_CONFIGURATOR_LVL]: newCount,
    });
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    field.onChange({
      [FORM_KEYS.FORMATION_CONFIGURATOR_NAME]: title,
      [FORM_KEYS.FORMATION_CONFIGURATOR_LVL]: newCount,
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
          disabled={disableDecremental}
        >
          -
        </button>
        <span className="rotating-button-display">{displayCount}</span>
        <button
          type="button"
          onClick={handleIncrement}
          disabled={disabledIncremental}
        >
          +
        </button>
      </div>
      {/* <button type="button" key={buttonKey} onClick={handleClick}>
        {displayCount}
      </button> */}
    </div>
  );
};

export default RotatingButton;
