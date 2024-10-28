import { Route, Routes } from 'react-router-dom';

// css
import './MainContent.css';

// hooks
import useMain from '/home_page/main_provider/useMainProvider';

// components
import FormationHelperEntry from '../../formation_helper/FormationHelper';

const MainContent = () => {
  const { isMainNavCollapsed } = useMain();

  return (
    <div className={`main-content ${isMainNavCollapsed ? 'expanded' : ''}`}>
      <Routes>
        <Route
          path="/formation-helper"
          element={<FormationHelperEntry />}
          index={true}
        />
      </Routes>
    </div>
  );
};

export default MainContent;
