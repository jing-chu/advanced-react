import React, { useState } from 'react';
// useState - function, named import: , {name}

const UseStateBasics = () => {
  /* console.log(useState);    // return f (a function)
  console.log(useState());  // return [undefined, f]
  console.log(useState(10)); // return [10, f] */
  const [text, setText] = useState('Random Text');   // array distructure: const [value, setValue]
  const handleClick = () => {
    if (text === 'Random Text') {
      setText('Hello World!');
    } else {
      setText('Random Text');
    }

  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Text
      </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
