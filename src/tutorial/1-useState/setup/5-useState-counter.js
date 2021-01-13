import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const increaseComplex = () => {
    setTimeout(() => {
      setValue((currentValue) => {
        return currentValue + 1;
      })
    }, 2000)
  }

  return (
    <section >
      <h2>Reguler Counter</h2>
      <h2>{value}</h2>
      <button className='btn' onClick={() => setValue(value - 1)}>Decrease</button>
      <button className='btn' onClick={() => setValue(0)}>Reset</button>
      <button className='btn' onClick={() => setValue(value + 1)}>Increase</button>

      <h2>Complex Counter</h2>
      <h2>{value}</h2>
      <button className='btn' onClick={increaseComplex}>Decrease</button>
    </section>
  )

};

export default UseStateCounter;
