import React from 'react';
import './CurrentStats.css';

const CurrentStats = ({ 
  players = "64/64",
  ping = "47ms",
  tickrate = "60 Hz"
}) => {
  return (
    <div className="current-stats">
      <div className="stat-group">
        
          <span className="stat-label">players</span>
          <span className="stat-value">{players}</span>
        
      </div>
      
      <div className="stat-group">
        
          <span className="stat-label">ping</span>
          <span className="stat-value">{ping}</span>
        
      </div>
      
      <div className="stat-group">
       
          <span className="stat-label">tickrate</span>
          <span className="stat-value">{tickrate}</span>
        
      </div>
    </div>
  );
};

export default CurrentStats;

