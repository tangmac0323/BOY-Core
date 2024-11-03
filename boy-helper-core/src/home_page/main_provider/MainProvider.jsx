import { useState } from 'react';

// context
import MainContext from './MainContext';

const MainProvider = ({ children }) => {
  const [isMainNavCollapsed, setMainNavIsCollapsed] = useState(false); // Control sidebar state

  // Function to toggle sidebar
  const toggleMainNav = () => {
    setMainNavIsCollapsed(!isMainNavCollapsed);
  };

  const value = {
    isMainNavCollapsed,
    toggleMainNav,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MainProvider;
