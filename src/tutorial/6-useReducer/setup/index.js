import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

import { reducer } from './reducer'

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name }
      dispatch({ type: "ADD_ITEM", payload: newPerson });
      setName('');
    } else {
      dispatch({ type: "NAME_EMPTY" })
    }
  }

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" })
  }

  return (
    <div>
      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type='submit'>Add</button>
      </form>
      <div>
        <ul>
          {state.people.map((person) => {
            return (
              <li className='item' key={person.id}>{person.name}
                <button type='button' onClick={() => { dispatch({ type: 'REMOVE_ITEM', payload: person.id }) }}>Remove</button>
              </li>
            )

          })}
        </ul>

      </div>
    </div>
  );
};

export default Index;
