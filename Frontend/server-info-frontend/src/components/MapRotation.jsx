import React from 'react';
import './MapRotation.css';

const MapRotation = ({ maps = [
  {
    name: 'dawnbreaker',
    mode: 'conquest large',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iN',
    background: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iO'
  },
  {
    name: 'propaganda',
    mode: 'conquest large',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iP',
    background: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iQ'
  },
  {
    name: 'operation locker',
    mode: 'conquest large',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iR',
    background: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iS'
  },
  {
    name: 'lancang dam',
    mode: 'conquest large',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iT',
    background: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iU'
  },
  {
    name: 'dawnbreaker',
    mode: 'conquest large',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iN',
    background: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iO'
  },
  {
    name: 'propaganda',
    mode: 'conquest large',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iP',
    background: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iQ'
  },
  {
    name: 'operation locker',
    mode: 'conquest large',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iR',
    background: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iS'
  },
  {
    name: 'lancang dam',
    mode: 'conquest large',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iT',
    background: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iU'
  },
  {
    name: 'dawnbreaker',
    mode: 'conquest large',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iN',
    background: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iO'
  },
  {
    name: 'propaganda',
    mode: 'conquest large',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iP',
    background: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iQ'
  },
  {
    name: 'operation locker',
    mode: 'conquest large',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iR',
    background: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iS'
  },
  {
    name: 'lancang dam',
    mode: 'conquest large',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iT',
    background: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iU'
  },
  {
    name: 'dawnbreaker',
    mode: 'conquest large',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iN',
    background: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iO'
  },
  {
    name: 'propaganda',
    mode: 'conquest large',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iP',
    background: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iQ'
  },
  {
    name: 'operation locker',
    mode: 'conquest large',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iR',
    background: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iS'
  },
  {
    name: 'lancang dam',
    mode: 'conquest large',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iT',
    background: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iU'
  }

] }) => {
  return (
    <div className="map-rotation">
      {maps.map((map, index) => (
        <div key={index} className="map-card">
          <div 
            className="map-background"
            style={{ backgroundImage: `url(${map.background})` }}
          >
            <div 
              className="map-image"
              style={{ backgroundImage: `url(${map.image})` }}
            />
            <div className="map-info">
              <h3 className="map-mode">{map.mode}</h3>
              <h3 className="map-name">{map.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MapRotation;

