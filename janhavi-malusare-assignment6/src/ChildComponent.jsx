import React, { useState } from 'react';

const ChildComponent = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
    onToggle(!isOn);
  };

  return (
    <div
      style={{
        height: '100px',
        width: '100px',
        backgroundColor: isOn ? 'black' : 'white',
        border: '1px solid grey',
      }}
      onClick={handleClick}
    ></div>
  );
};

export default ChildComponent;


