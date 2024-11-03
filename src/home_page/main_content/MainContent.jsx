// css
import './MainContent.css';

// hooks
import useMain from '@src/home_page/main_provider/useMainProvider';

// components
import MainContentRoutes from './MainContentRoutes';

const MainContent = () => {
  const { isMainNavCollapsed } = useMain();

  return (
    <div className={`main-content ${isMainNavCollapsed ? 'expanded' : ''}`}>
      <MainContentRoutes />
    </div>
  );
};

export default MainContent;
