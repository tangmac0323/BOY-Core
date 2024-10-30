import { useState, useEffect } from 'react';

// form
import { useForm, Controller } from 'react-hook-form';

// hooks
import useFormation from '../useFormation';

// css
import './FormationSetup.css';

// components
import TeamBlock from '../team_block/TeamBlock';

const FormationSetup = () => {
  return (
    <div className="formation-setup-main">
      <TeamBlock teamNumber="0" />
      <TeamBlock teamNumber="1" />
      <TeamBlock teamNumber="2" />
      <TeamBlock teamNumber="3" />
    </div>
  );
};

export default FormationSetup;
