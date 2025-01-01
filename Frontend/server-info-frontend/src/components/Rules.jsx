import React, { useState } from 'react';
import './Rules.css';

const Rules = ({ 
  tickets = 400,
  vehicleSpawnDelay = 25,
  bulletDamage = 100,
  kickAfterTeamKills = 5,
  playerHealth = 100,
  playerRespawnTime = 100,
  kickAfterIdle = 300,
  banAfterKicks = 3
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const ruleItems = [
    { label: 'tickets', value: tickets, highlight: true },
    { label: 'vehicle spawn delay', value: vehicleSpawnDelay, highlight: true },
    { label: 'bullet damage', value: bulletDamage },
    { label: 'kick after team kills', value: kickAfterTeamKills },
    { label: 'player health', value: playerHealth },
    { label: 'player respawn time', value: playerRespawnTime },
    { label: 'kick after idle', value: kickAfterIdle },
    { label: 'ban after kicks', value: banAfterKicks }
  ];

  return (
    <div 
      className="rules-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="rules-title">rules</h2>
      <div className={`rules-content ${isHovered ? 'expanded' : ''}`}>
        {ruleItems.map((item, index) => (
          <div key={index} className="rule-item">
            <div className="rule-label">{item.label}</div>
            <div className={`rule-value ${item.highlight ? 'highlighted' : ''}`}>
              {item.value}
            </div>
            <div className="rule-divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;

