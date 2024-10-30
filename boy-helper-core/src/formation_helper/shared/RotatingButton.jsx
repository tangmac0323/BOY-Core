import { useState } from 'react';

const RotatingButton = ({
  buttonKey,
  title,
  initNumber,
  maxNumber,
  // onChange,
}) => {
  const [buttonValue, setButtonValue] = useState(initNumber);

  // Handle left-click to increment the number on each button
  const handleClick = () => {
    console.log('buttonValue', buttonValue);
    setButtonValue((prevValues) => (prevValues + 1) % (maxNumber + 1));
  };

  return (
    <>
      <div>
        {title}:
        <button key={buttonKey} onClick={handleClick}>
          {buttonValue}
        </button>
      </div>
    </>
  );
};

export default RotatingButton;
