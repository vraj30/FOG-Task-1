import React from 'react';
import './BreadcrumbNavigation.css';

const BreadcrumbNavigation = ({ 
  previousPage = 'MULTIPLAYER',
  currentPage = 'SERVER BROWSER',
  title = 'SERVER INFO'
}) => {
  return (
    <div className="browser__breadcrumb">
      <div className="browser__breadcrumb-previous">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z3KtW4DQVAQjI3iD" alt="back" className="back-icon" />
        <span className="previous-page">{previousPage}</span>
        <span className="separator">/</span>
        <span className="current-page">{currentPage}</span>
        <span className="separator">/</span>
      </div>
      <h1 className="browser__breadcrumb-title">{title}</h1>
    </div>
  );
};

export default BreadcrumbNavigation;

