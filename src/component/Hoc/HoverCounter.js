import React from 'react';
import HocComponent from './HocComponent'; 

const HoverCounter = ({ count, increment }) => {
    console.log("hover")
  return (
    <div className='container mt-5' align="center">
      <p onMouseOver={increment} className='alert-warning'>
        Hover count: {count}
      </p>
    </div>
  );
};

export default HocComponent(HoverCounter);
