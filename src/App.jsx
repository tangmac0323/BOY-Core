import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

// components
import MainSideNav from './home_page/main_side_nav/MainSideNav';
import MainHeader from './home_page/main_header/MainHeader';
import MainContent from './home_page/main_content/MainContent';
import MainProvider from './home_page/main_provider/MainProvider';

const App = () => {
  console.log('processenv', process.env);
  return (
    <Router>
      <MainProvider>
        <MainHeader>BOY Helper</MainHeader>
        <div className="main-layout">
          <MainSideNav />
          <MainContent />
        </div>
      </MainProvider>
    </Router>
  );
};

export default App;
