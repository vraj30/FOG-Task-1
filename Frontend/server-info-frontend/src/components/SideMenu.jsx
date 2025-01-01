import React from 'react';
import PropTypes from 'prop-types';
import './SideMenu.css';

const SideMenu = ({ onMenuItemClick }) => {
  


  const menuItems = [
    { id: 'games1', icon: '/g1.png', label: 'Game 1' },
    { id: 'games2', icon: '/g2.png', label: 'Game 2' },
    { id: 'games3', icon: '/g3.png', label: 'Game 3' },
    { id: 'games4', icon: '/g4.png', label: 'Game 4' },
    { id: 'other1', icon: '/g5.png', label: 'Other 1' },
    { id: 'other2', icon: '/side-menu__news.png', label: 'Other 2' },
    { id: 'other3', icon: '/side-menu__watch.png', label: 'Other 3' },
   
    { id: 'help', icon: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iX', label: 'Help' },
    { id: 'quit', icon: 'https://dashboard.codeparrot.ai/api/assets/Z3KtdIDQVAQjI3iY', label: 'Quit' }
  ];

  return (
    <nav 
      className={`side-menu`}
      
    >
      <div className="side-menu__content">
        <div className="side-menu__section games">
          {menuItems.slice(0, 3).map(item => (
            <button
              key={item.id}
              className="menu-item"
              onClick={() => onMenuItemClick(item.id)}
            >
              <img src={item.icon} alt={item.label} />
              {/* <span className="menu-item__label">{item.label}</span> */}
            </button>
          ))}
        </div>

        <div className="side-menu__section other">
          {menuItems.slice(3, 7).map(item => (
            <button
              key={item.id}
              className="menu-item"
              onClick={() => onMenuItemClick(item.id)}
            >
              <img src={item.icon} alt={item.label} />
              {/* <span className="menu-item__label">{item.label}</span> */}
            </button>
          ))}
        </div>

        
      </div>
      <div className="side-menu__section misc">
          {menuItems.slice(7,9).map(item => (
            <button
              key={item.id}
              className="menu-item"
              onClick={() => onMenuItemClick(item.id)}
            >
              <img src={item.icon} alt={item.label}/>
              {/* <span className="menu-item__label">{item.label}</span> */}
            </button>
          ))}
        </div>
      <div className="side-menu__line"></div>
    </nav>
  );
};

SideMenu.propTypes = {
  onMenuItemClick: PropTypes.func
};

SideMenu.defaultProps = {
  onMenuItemClick: () => {}
};

export default SideMenu;

