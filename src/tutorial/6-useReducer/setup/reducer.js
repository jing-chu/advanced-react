export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item added'
    }
  }
  if (action.type === "NAME_EMPTY") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter value"
    }
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((person) => person.id !== action.payload)
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Person is removed"
    }
  }
  throw new Error('no matching action type')
}