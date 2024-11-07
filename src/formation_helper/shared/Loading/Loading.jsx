import React from 'react';
import './Loading.css'; // Optional: For custom styling

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading Setup From Url</p>
    </div>
  );
};

export default Loading;
