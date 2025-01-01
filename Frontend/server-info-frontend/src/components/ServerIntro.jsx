import React from 'react';
import './ServerIntro.css';

const ServerIntro = ({ 
  title = "! RC3-BASEMAPS",
  serverInfo = "CONQUEST LARGE - Lancang Dam - Custom - 60hz",
  serverDescription = "Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d"
}) => {
  return (
    <div className="server-intro">
      <h1 className="server-title">{title}</h1>
      
      <div className="server-info">
      <img 
  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" 
  alt="USA Flag" 
  className="flag-icon"
/>

        <span className="info-text">{serverInfo}</span>
      </div>

      <div className="server-description">
        {serverDescription}
      </div>
    </div>
  );
};

export default ServerIntro;

