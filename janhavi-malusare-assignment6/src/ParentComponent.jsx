import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleToggle = (isOn) => {
    setCount((prevCount) => (isOn ? prevCount + 1 : prevCount - 1));
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 100px)', gap: '10px' }}>
        <ChildComponent onToggle={handleToggle} />
        <ChildComponent onToggle={handleToggle} />
        <ChildComponent onToggle={handleToggle} />
        <ChildComponent onToggle={handleToggle} />
      </div>
    </div>
  );
};

export default ParentComponent;
