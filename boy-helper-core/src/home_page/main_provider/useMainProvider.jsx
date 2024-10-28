import { useContext } from 'react';
import MainContext from './MainContext';

const useMain = () => {
  return useContext(MainContext);
};

export default useMain;
