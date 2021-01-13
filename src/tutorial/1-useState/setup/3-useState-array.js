import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [persons, setPersons] = useState(data);

  const handleRemove = (id) => {
    const newPersons = persons.filter((person) => person.id !== id);
    setPersons(newPersons);
  }

  return (
    <>
      {persons.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => { handleRemove(id) }}>Remove</button>
          </div>
        )
      })
      }
      <button className='btn' onClick={() => { setPersons([]) }}>Clear All</button>
    </>
  )
};

export default UseStateArray;
