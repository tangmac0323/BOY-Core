// src/components/SideNav.jsx
import { Link } from 'react-router-dom';
import './MainSideNav.css';

// hooks
import useMain from '@src/home_page/main_provider/useMainProvider';

const handleAsideClick = (onClick) => {
  onClick();
};

function handleChildClick(event) {
  event.stopPropagation(); // Prevents the click from bubbling up to the aside
}

const MainSideNav = () => {
  const { toggleMainNav, isMainNavCollapsed } = useMain();

  return (
    <aside
      className={`side-nav ${isMainNavCollapsed ? 'collapsed' : ''}`}
      onClick={() => handleAsideClick(toggleMainNav)}
    >
      <ul>
        <li>
          <Link to="/formation-helper" onClick={handleChildClick}>
            阵线模拟器
          </Link>
        </li>
        <li>
          <Link to="/heroes-codex" onClick={handleChildClick}>
            黑卫阵线检索
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MainSideNav;
