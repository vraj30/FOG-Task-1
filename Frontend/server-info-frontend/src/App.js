import React  from "react";
import BreadcrumbNavigation from './components/BreadcrumbNavigation';
import ServerIntro from './components/ServerIntro';
import ActionButtons from './components/ActionButtons';
import CurrentStats from './components/CurrentStats';
import SettingsAndAdvanced from './components/SettingsAndAdvanced';
import MapRotation from './components/MapRotation';
import SideMenu from './components/SideMenu';
import './index.css';
import Sidebar from './components/Sidebar';

const MainComponent = () => {
cl
  // Data for SettingsAndAdvanced
  // const settings = [
  //   { label: 'Region', value: 'europe - de' },
  //   { label: 'punkbuster', value: 'on' },
  //   { label: 'fairfight', value: 'on' },
  //   { label: 'password', value: 'off' },
  //   { label: 'preset', value: 'normal' },
  // ];

  // const advanced = [
  //   { label: 'minimap', value: 'on' },
  //   { label: 'only squad leader spawn', value: 'off' },
  //   { label: 'vehicles', value: 'on' },
  //   { label: 'team balance', value: 'on' },
  //   { label: 'minimap spotting', value: 'on' },
  //   { label: 'hud', value: 'on' },
  //   { label: '3p vehicle cam', value: 'on' },
  //   { label: 'regenerative health', value: 'on' },
  //   { label: 'kill cam', value: 'on' },
  //   { label: 'friendly fire', value: 'off' },
  //   { label: '3d spotting', value: 'on' },
  //   { label: 'enemy name tags', value: 'on' },
  // ];

  // const rules = [
  //   { label: 'tickets', value: '400' },
  //   { label: 'vehicle spawn delay', value: '25' },
  //   { label: 'bullet damage', value: '100' },
  //   { label: 'kick after team kills', value: '5' },
  //   { label: 'player health', value: '100' },
  //   { label: 'player respawn time', value: '100' },
  //   { label: 'kick after idle', value: '300' },
  //   { label: 'ban after kicks', value: '3' },
  // ];

  return (
    
      <div className="main-layout">
        <SideMenu/>
    <div class="scroll-container">
      
      
      <div className="content">
        <BreadcrumbNavigation />
        <ServerIntro />
        <div className="actions-and-stats">
          <ActionButtons />
        </div>
        <CurrentStats />
        {/* Pass settings, advanced, and rules props */}
        <SettingsAndAdvanced 
          // settings={settings} 
          // advanced={advanced} 
          // rules={rules} 
        />
        <MapRotation />
      </div>
      
    </div>
    
    <Sidebar/>
</div>
    
  );
};

export default MainComponent;
