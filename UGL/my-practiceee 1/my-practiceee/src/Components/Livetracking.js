import React from 'react';
import Map from './Images/maps.jpg';

const Livetracking = ({ selectedCard }) => {
  return (
    <div className="livetracking">
      {selectedCard ? (
        <div className="card-info">
          <div style={{ width: "50px", height: "50px" }}>
            <svg width="30" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M46.875 25C46.875 37.0812 37.0812 46.875 25 46.875C12.9188 46.875 3.125 37.0812 3.125 25C3.125 12.9188 12.9188 3.125 25 3.125C37.0812 3.125 46.875 12.9188 46.875 25Z" stroke="#000" strokeWidth="2"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M34.3333 31.5867V20.3334C34.3333 16.6134 30.8533 15.8 26.32 15.68L27.3333 13.6667H31.6666V11.6667H18.3333V13.6667H24.6666L23.6533 15.6934C19.48 15.8134 15.6666 16.64 15.6666 20.3334V31.5867C15.6666 33.52 17.2533 35.1334 19.12 35.5467L17 37.6667V38.3334H19.9733L22.64 35.6667H27.6666L30.3333 38.3334H33V37.6667L31 35.6667H30.8933C33.1466 35.6667 34.3333 33.84 34.3333 31.5867ZM25 33.6667C23.8933 33.6667 23 32.7734 23 31.6667C23 30.56 23.8933 29.6667 25 29.6667C26.1066 29.6667 27 30.56 27 31.6667C27 32.7734 26.1066 33.6667 25 33.6667ZM18.3333 27.6667H31.6666V21H18.3333V27.6667Z" fill="#000"/>
            </svg>
          </div>
          <h6>{selectedCard.title}</h6>
          <h3 style={{ marginLeft: "9px" }}>{selectedCard.count}</h3>
          {/* <button onClick={clearSelection}>Clear </button> */}
        </div>
      // ) : selectedRow && !selectedCard ? (
      //   <div className="row-info">
      //     <h3>Selected Row Details</h3>
      //     <div>Train Number: {selectedRow.trainNumber}</div>
      //     <div>Unit Number: {selectedRow.unitNumber}</div>
      //     <div>Alarm Source: {selectedRow.alarmSource}</div>
      //     <div>Mode: {selectedRow.mode}</div>
      //     <div>Routine Service: {selectedRow.routineService}</div>
      //     <div>Standing Alarm: {selectedRow.standingAlarm}</div>
      //     <div>Next Station: {selectedRow.nextStation}</div>
      //     <div>Constraints: {selectedRow.constraints}</div>
      //     <div>Last Communication: {selectedRow.lastCommunication}</div>
      //     {/* <button onClick={clearSelection}>Clear Content</button> */}
      //   </div>
      ) : (
        <>
          <div className="livetracking-title">Live Tracking</div>
          <img src={Map} className="livetracking-map" alt="Map" />
        </>
      )}  
    </div>
  );
};

export default Livetracking;
