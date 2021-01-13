import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const inputContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputContainer.current);
  }

  const focusTextInput = () => {
    inputContainer.current.focus();
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input type="text" ref={inputContainer}></input>
        <button type="submit" onClick={focusTextInput}>Submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
