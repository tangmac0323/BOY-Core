// src/components/SideNav.jsx
import { Link } from 'react-router-dom';
import './MainSideNav.css';

// hooks
import useMain from '@src/home_page/main_provider/useMainProvider';

const MainSideNav = () => {
  const { toggleMainNav, isMainNavCollapsed } = useMain();

  return (
    // <div className="side-nav">
    <aside
      className={`side-nav ${isMainNavCollapsed ? 'collapsed' : ''}`}
      onClick={toggleMainNav}
    >
      {/* <button className="toggle-btn" onClick={toggleMainNav}>
        {isMainNavCollapsed ? '>' : '<'}
      </button> */}
      <ul>
        <li>
          <Link to="/formation-helper">阵线模拟器</Link>
        </li>
        {/* <li>
          <Link to="/page2">Tab 2</Link>
        </li>
        <li>
          <Link to="/page3">Tab 3</Link>
        </li> */}
      </ul>
    </aside>
  );
};

export default MainSideNav;
