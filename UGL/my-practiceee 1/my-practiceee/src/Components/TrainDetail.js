import React from 'react';

const TrainDetail  = ({ row }) => {
  return (
    <div className="details-page">
      <h2>Details for Train Number: {row.trainNumber}</h2>
      <p><strong>Unit Number:</strong> {row.unitNumber}</p>
      <p><strong>Alarm Source:</strong> {row.alarmSource}</p>
      <p><strong>Mode:</strong> {row.mode}</p>
      <p><strong>Routine Service:</strong> {row.routineService}</p>
      <p><strong>Standing Alarm:</strong> {row.standingAlarm}</p>
      <p><strong>Next Station:</strong> {row.nextStation}</p>
      <p><strong>Constraints:</strong> {row.constraints}</p>
      <p><strong>Last Communication:</strong> {row.lastCommunication}</p>
    </div>
  );
}

export default TrainDetail;
