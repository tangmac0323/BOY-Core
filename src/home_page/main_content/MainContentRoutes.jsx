import { Route, Routes } from 'react-router-dom';

// css
import './MainContent.css';

// components
import FormationHelperEntry from '../../formation_helper/FormationHelperEntry';

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<FormationHelperEntry />} index={true} />
      <Route path="/formation-helper" element={<FormationHelperEntry />} />
    </Routes>
  );
};

export default MainContent;
