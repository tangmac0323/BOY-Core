// src/components/Header.jsx
import React from 'react';
import './MainHeader.css'; // Link to your header styling

const MainHeader = () => {
  return (
    <header className="sticky-header">
      <h1>Book Of Yog Core {`(BETA version 0.5.0)`}</h1>
    </header>
  );
};

export default MainHeader;
