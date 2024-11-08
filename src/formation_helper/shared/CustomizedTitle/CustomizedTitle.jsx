import { Controller } from 'react-hook-form';
import { useState } from 'react';

// css
import './CustomizedTitle.css';

// utils
import { FORM_KEYS } from '@src/formation_helper/Utils';
import useFormation from '@src/formation_helper/useFormation';

const MAX_CHAR_LIMIT = 20;

const CustomizedTitle = ({ teamNumber }) => {
  const { control } = useFormation();

  const [charCount, setCharCount] = useState(0);

  return (
    <div className="input-wrapper">
      <Controller
        name={`${FORM_KEYS.TITLE}`}
        control={control}
        defaultValue={'标题'}
        rules={{
          maxLength: MAX_CHAR_LIMIT, // Limits the input to 200 characters
        }}
        render={({ field }) => (
          <div>
            <input
              className="title-input"
              key={`${FORM_KEYS.TITLE}`}
              {...field}
              type="text"
              placeholder="请在这里输入标题"
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= MAX_CHAR_LIMIT) {
                  field.onChange(e); // Only update if within the limit
                  setCharCount(value.length); // Update the character count
                }
              }}
            />
            <span className="char-count">
              {charCount}/{MAX_CHAR_LIMIT}
            </span>
          </div>
        )}
      />
    </div>
  );
};

export default CustomizedTitle;
