import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value >= 1) {              //use conditions inside useEffect()
      document.title = `New Messages (${value})`
    }
  }, [value])

  useEffect(() => {
    console.log("initial rerender")
  }, [])


  return (
    <>
      <h2>{value}</h2>
      <button className='btn' onClick={() => { setValue(value + 1) }}>Click Me</button>
    </>
  );
};

export default UseEffectBasics;
