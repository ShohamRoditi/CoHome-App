import ADD_RATING from './TasksPageActionType'

const initialState = {
  rate: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_RATING:
      return {
        ...state,
        rate: action.data
      }
    default:
      return state
  }
}
