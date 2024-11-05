import { useState } from 'react';

// form
import { useForm, Controller } from 'react-hook-form';

// utils
import useFormation from '@src/formation_helper/useFormation';

// css
import './CathedraToggle.css';

// this to indicate if the player has the cathedral lvl maxed out
const Toggle = ({ value, onChange }) => {
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="slider"></span>
    </label>
  );
};

const CathedralToggle = () => {
  // get information from the provider
  const { control } = useFormation();

  return (
    <Controller
      name="cathedralBonus"
      control={control}
      defaultValue={true}
      render={({ field }) => (
        <h2>
          大圣堂阵线{`(开启后所有主阵线等级+1)`}:{`    `}
          <Toggle value={field.value} onChange={field.onChange} />
        </h2>
      )}
    />
  );
};

export default CathedralToggle;
