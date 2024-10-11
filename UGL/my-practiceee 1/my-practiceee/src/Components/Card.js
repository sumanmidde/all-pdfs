import React from 'react';

const Card = ({ title, count, setSelectedCard }) => {
  let iconColor = "#757575";

  if (title === "Total Units") {
    iconColor = "#757575";
  } else if (title === "Units in operation") {
    iconColor = "#2196F3";
  } else if (title === "Units in Maintenance") {
    iconColor = "#D433FF";
  } else if (title === "Units with high priority Alarm") {
    iconColor = "#FF0000";
  } else if (title === "Units with low priority Alarm") {
    iconColor = "#FFA500";
  } else if (title === "Units With Good Health") {
    iconColor = "#4CAF50";
  }

  const trainNewSvg = (
    <svg width="30" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M46.875 25C46.875 37.0812 37.0812 46.875 25 46.875C12.9188 46.875 3.125 37.0812 3.125 25C3.125 12.9188 12.9188 3.125 25 3.125C37.0812 3.125 46.875 12.9188 46.875 25Z" stroke={iconColor} strokeWidth="2"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M34.3333 31.5867V20.3334C34.3333 16.6134 30.8533 15.8 26.32 15.68L27.3333 13.6667H31.6666V11.6667H18.3333V13.6667H24.6666L23.6533 15.6934C19.48 15.8134 15.6666 16.64 15.6666 20.3334V31.5867C15.6666 33.52 17.2533 35.1334 19.12 35.5467L17 37.6667V38.3334H19.9733L22.64 35.6667H27.6666L30.3333 38.3334H33V37.6667L31 35.6667H30.8933C33.1466 35.6667 34.3333 33.84 34.3333 31.5867ZM25 33.6667C23.8933 33.6667 23 32.7734 23 31.6667C23 30.56 23.8933 29.6667 25 29.6667C26.1066 29.6667 27 30.56 27 31.6667C27 32.7734 26.1066 33.6667 25 33.6667ZM18.3333 27.6667H31.6666V21H18.3333V27.6667Z" fill={iconColor}/>
    </svg>
  );

  return (
    <div className="card" onClick={() => setSelectedCard({ title, count })}>
      <div style={{ width: "50px", height: "50px" }}>
        {trainNewSvg}
      </div>
      <h6>{title}</h6>
      <h3 style={{ marginLeft:"9px",  marginRight:"9px" }}>{count}</h3>
    </div>
  );
}

export default Card;
