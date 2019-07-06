import { MY_TENANTS, HIGHEST_SCORE, WANTED_PRIZE } from './RatingPageActionType'

const initialState = {
  tenants: [],
  highestScore: 0,
  prize: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MY_TENANTS:
      return {
        ...state,
        tenants: action.data
      }
    case HIGHEST_SCORE:
      return {
        ...state,
        highestScore: action.data
      }
    case WANTED_PRIZE:
      return {
        ...state,
        prize: action.data
      }
    default:
      return state
  }
}
