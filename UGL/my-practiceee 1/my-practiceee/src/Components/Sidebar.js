import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import InsightsIcon from '@mui/icons-material/Insights';
import TramIcon from '@mui/icons-material/Tram';
import CommuteIcon from '@mui/icons-material/Commute';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AdjustIcon from '@mui/icons-material/Adjust';

const Sidebar = ({ onIconClick, activeIcon }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-back-button">
        <ArrowBackIcon />
      </div>
      <div className="sidebar-menu">
        <MenuIcon />
      </div>
      <div className="sidebar-item">
        <CommuteIcon
          onClick={() => onIconClick('commute')}
          className={activeIcon === 'commute' ? 'icon-active' : 'icon-inactive'}
        />
      </div>
      <div className="sidebar-item">
        <TramIcon
          onClick={() => onIconClick('tram')}
          className={activeIcon === 'tram' ? 'icon-active' : 'icon-inactive'}
        />
      </div>
      <div className="sidebar-item">
        <NotificationsActiveIcon />
        <ArrowRightIcon className="arrow-right-icon" />
      </div>
      <div className="sidebar-item">
        <LeaderboardIcon />
        <ArrowRightIcon className="arrow-right-icon" />
      </div>
      <div className="sidebar-item">
        <AdjustIcon />
        <ArrowRightIcon className="arrow-right-icon" />
      </div>
      <div className="sidebar-item">
        <InsightsIcon />
        <ArrowRightIcon className="arrow-right-icon" />
      </div>
    </div>
  );
}

export default Sidebar;
