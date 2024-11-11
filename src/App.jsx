import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

// components
import MainSideNav from './home_page/main_side_nav/MainSideNav';
import MainHeader from './home_page/main_header/MainHeader';
import MainContent from './home_page/main_content/MainContent';
import MainProvider from './home_page/main_provider/MainProvider';
import CookieConsent from './home_page/cookie_consent/CookieConsent';
const App = () => {
  return (
    <Router>
      <CookieConsent />
      <MainProvider>
        <MainHeader>Bookofyog Core</MainHeader>
        <div className="main-layout">
          <MainSideNav />
          <MainContent />
        </div>
      </MainProvider>
    </Router>
  );
};

export default App;
