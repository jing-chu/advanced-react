import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size, setSize] = useState(window.innerWidth);

  const changeSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', changeSize);
    return () => {             // return a cleanup function
      window.removeEventListener('resize', changeSize);
    }
  }, [])

  return <>
    <h2>Window</h2>
    <h3>{size} PX</h3>
  </>;
};

export default UseEffectCleanup;
