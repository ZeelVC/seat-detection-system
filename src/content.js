import React, { useState } from 'react';
import './content.css';
import chairImage1 from './seat1.jpg.png';
import chairImage2 from './seat2.jpg.png';

const Content = () => {
  const [chairStates, setChairStates] = useState(Array(6).fill(false));

  const handleChairClick = (index) => {
    const newChairStates = [...chairStates];
    newChairStates[index] = !newChairStates[index];
    setChairStates(newChairStates);
  };

  return (
    <div className="chair-container">
      {chairStates.map((isOccupied, index) => (
        <img
          key={index}
          src={isOccupied ? chairImage2 : chairImage1}
          alt={`Chair ${index + 1}`}
          className="chair"
          onClick={() => handleChairClick(index)}
        />
      ))}
    </div>
  );
};

export default Content;
