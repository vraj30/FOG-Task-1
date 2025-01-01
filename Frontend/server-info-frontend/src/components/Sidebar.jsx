import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`sidebar ${isExpanded ? "expanded" : ""}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Squad Section */}
      <div className="section">
        <div className="section-header">
          <img src="/squad.png" alt="Squad" />
          <span className="header-text">SQUAD</span>
        </div>
        <div className="section-item">
          <img src="/join.png" alt="Join" className="item-icon" />
          {isExpanded && <span className="item-text">Squad Join</span>}
        </div>
      </div>

      {/* Online Section */}
      <div className="section">
      <div className="section-header">
          <img src="/online.png" alt="Squad" />
          <span className="header-text">Online</span>
        </div>
        <div className="section-item">
          <img src="/image 1.png" alt="MaryJane" className="item-avatar" />
          {isExpanded && (
            <div className="item-details">
              <span className="item-name">MaryJane</span>
              <span className="item-status online">Online</span>
            </div>
          )}
        </div>
      </div>

      {/* Offline Section */}
      <div className="section">
      <div className="section-header">
          <img src="/offline.png" alt="Squad" />
          <span className="header-text">Offline</span>
        </div>
        <div className="section-item">
          <img src="/image 2.png" alt="420" className="item-avatar" />
          {isExpanded && (
            <div className="item-details">
              <span className="item-name">420</span>
              <span className="item-status offline">Offline</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
