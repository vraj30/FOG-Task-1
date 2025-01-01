import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './SettingsAndAdvanced.css';

const SettingsAndAdvanced = () => {
  const [settings, setSettings] = useState([]);
  const [advanced, setAdvanced] = useState([]);
  const [rules, setRules] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const settingsResponse = await axios.get('http://localhost:5000/api/settings');
        const advancedResponse = await axios.get('http://localhost:5000/api/advanced');
        const rulesResponse = await axios.get('http://localhost:5000/api/rules');
        setSettings(settingsResponse.data);
        setAdvanced(advancedResponse.data);
        setRules(rulesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="settings-advanced-container">
      {/* Settings Section */}
      <div className="settings-section">
        <h2 className="section-title">settings</h2>
        <div className="settings-list">
          {settings.map((item, index) => (
            <div className="setting-item" key={index}>
              <span className="setting-label">{item.label}</span>
              <span className="setting-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Section */}
      <div className="advanced-section">
        <h2 className="section-title">advanced</h2>
        <div className="advanced-list">
          {advanced.map((item, index) => (
            <div className="advanced-item" key={index}>
              <span className="setting-label">{item.label}</span>
              <span className="setting-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rules Section */}
      <div className="rules-section">
        <h2 className="section-title">rules</h2>
        <div className="rules-list">
          {rules.map((item, index) => (
            <div className="rules-item" key={index}>
              <span className="setting-label">{item.label}</span>
              <span className="setting-value highlight">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsAndAdvanced;
