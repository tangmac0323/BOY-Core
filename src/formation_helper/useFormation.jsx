import { useContext } from 'react';
import FormationContext from './FormationContext';

const useFormation = () => {
  return useContext(FormationContext);
};

export default useFormation;
