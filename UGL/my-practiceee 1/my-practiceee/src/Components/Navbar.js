import React from 'react';
import LoopIcon from '@mui/icons-material/Loop';
const Navbar = () => {
  const lastUpdated = new Date().toLocaleString();
  const utcDateTime = new Date().toLocaleString();

  return (
    <div className="Navbar">
      <h2>INTEGRA <span class="normal-font-weight">CMS</span></h2>
      <h4>Fleet Overview</h4>
      <div className="info-container">
        <div>Last Updated: {lastUpdated}</div>
        <div>UTC: {utcDateTime}</div>

      </div>
      <LoopIcon className="loop-icon" />
      <button className="add-ticket-button">+ Create Ticket</button>
      <div className="user">
        <div className='usernames'>
          <div style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
            Yaswanth Mahadasu</div>

          <div style={{ fontSize: "10px", textAlign: "right" }}>
            Administrator </div>

        </div>
        <div className="profile">YM</div>
      </div>
    </div>
  );
}

export default Navbar;
