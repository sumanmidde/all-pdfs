import React from 'react';
import Card from "./Card"; 

const Cardcontainer = ({ setSelectedCard }) => {
  return (
    <div className="cardcontainer">
      <Card title="Total Units" count="25" setSelectedCard={setSelectedCard} />
      <Card title="Units in operation" count="09" setSelectedCard={setSelectedCard} />
      <Card title="Units in Maintenance" count="16" setSelectedCard={setSelectedCard} />
      <Card title="Units with high priority Alarm" count="24" setSelectedCard={setSelectedCard} />
      <Card title="Units with low priority Alarm" count="00" setSelectedCard={setSelectedCard} />
      <Card title="Units With Good Health" count="01" setSelectedCard={setSelectedCard} />
    </div>
  );
}

export default Cardcontainer;
