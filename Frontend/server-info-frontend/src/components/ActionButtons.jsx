import React, { useState } from 'react';
import './ActionButtons.css';

const ActionButtons = ({
  onJoin = () => {},
  onSpectate = () => {},
  onJoinCommander = () => {},
  favoriteCount = 13672,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="action-buttons">
      <button className="action-btn join-btn" onClick={onJoin}>
        JOIN
      </button>

      <button className="action-btn spectate-btn" onClick={onSpectate}>
        SPECTATE
      </button>

      <button className="action-btn commander-btn" onClick={onJoinCommander}>
        JOIN AS COMMANDER
      </button>

      <div className="favorite-container">
        <button
          className="action-btn commander-btn"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={isHovered ? '/favdark.png' : '/favorite.png'}
            alt="favorite"
            className="favorite-icon"
          />
          <span className="favorite-count">{favoriteCount}</span>
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
