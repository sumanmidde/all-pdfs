import React, { useState } from 'react';
// import { useEffect } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import SearchIcon from '@mui/icons-material/Search';
import traindata from "./traindata.json";

const TicketSummary = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [trainDetails, setTrainDetails] = useState([]);

  const mySidebar = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/trainData.json');
  //       const data = await response.json();
  //       setTrainDetails(data);
  //     } catch (error) {
  //       console.error('Error fetching train data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className={`ticket-summary-sidebar ${isOpen ? 'open' : ''}`}>
      <KeyboardArrowRightIcon
        className="dropdown-icon"
        style={{ fontSize: '15px' }}
        onClick={mySidebar}
      />
      {!isOpen && (
        <>
          <div className="ticket-summary-title">Ticket Summary</div>
          <button className="ticket-summary-count">15</button>
        </>
      )}
      {isOpen && (
        <>
          <div classname="ticket-heading"> Ticket summary</div>
          <div className="ticket-summary-section">

            <div>Unsubmitted (10)</div>
            <div>Recent (5)</div>
            <div>External (2)</div>
          </div>
          <div className="train-cards">

            {traindata.data.map((train, index) => (

              <div className="train-card" key={index}>
                <div className="train-card-header">
                  <div>{train.number}</div>
                  <div className="train-date-time">{train.date}{train.time}</div>
                </div>
                <div className="train-description">{train.description}</div>

                <div className="train-info">
                  <div className="train-codes">
                    <div>{train.code}</div>
                    <div>|</div>
                    <div>{train['unit number']}</div>
                    <div>|</div>
                    <div>{train['unit code']}</div>
                  </div>
                  <div className="train-status">
                    <div>{train.status}</div>
                    <div>|</div>
                    <div>{train.speed}</div>
                  </div>
                </div>



              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TicketSummary;
