import { Route, Routes } from 'react-router-dom';

// css
import './MainContent.css';

// components
import FormationHelperEntry from '@src/formation_helper/FormationHelperEntry';
import HeroesHelperEntry from '@src/hero_helper/HeroCodexEntry';

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<FormationHelperEntry />} index={true} />
      <Route path="/formation-helper" element={<FormationHelperEntry />} />
      <Route path="/heroes-codex" element={<HeroesHelperEntry />} />
    </Routes>
  );
};

export default MainContent;
