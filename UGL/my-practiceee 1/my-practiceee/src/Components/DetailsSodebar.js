import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const DetailsSidebar = () => {
  return (
    <div className="details-sidebar">
      <KeyboardArrowRightIcon className="dropdown-icon" style={{ fontSize: '15px' }} />


      <div className="details-item">
        <div className="details-count">10</div>
        <div >Alarms</div>
      </div>

      <div className="details-item">
        <div className="details-count">45</div>
        <div >Alerts</div>
      </div>

      <div className="details-item">
        <div className="details-count">33</div>
        <div>Events</div>
      </div>
    </div>
  );
};

export default DetailsSidebar;
