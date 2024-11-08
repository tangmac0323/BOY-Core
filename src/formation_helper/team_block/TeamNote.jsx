import { Controller } from 'react-hook-form';
import { useState } from 'react';

// css
import './TeamBlock.css';

// utils
import { FORM_KEYS } from '@src/formation_helper/Utils';
import useFormation from '@src/formation_helper/useFormation';

const MAX_CHAR_LIMIT = 200;

const TeamNote = ({ teamNumber }) => {
  const { control } = useFormation();

  const [charCount, setCharCount] = useState(0);

  return (
    <Controller
      name={`${FORM_KEYS.TEAM.KEY_NAME}[${teamNumber}].${FORM_KEYS.TEAM.NOTE}`}
      control={control}
      defaultValue={''}
      rules={{
        maxLength: 200, // Limits the input to 200 characters
      }}
      render={({ field }) => (
        <div>
          <label>备注:</label>
          <textarea
            className="note-input-style"
            key={`${FORM_KEYS.TEAM.KEY_NAME}[${teamNumber}].${FORM_KEYS.TEAM.NOTE}`}
            {...field}
            type="text"
            placeholder="请在这里输入备注"
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= MAX_CHAR_LIMIT) {
                field.onChange(e); // Only update if within the limit
                setCharCount(value.length); // Update the character count
              }
            }}
            rows={4} // Initial number of rows
          />
          <p className="char-count">
            {charCount}/{MAX_CHAR_LIMIT}
          </p>
        </div>
      )}
    />
  );
};

export default TeamNote;
