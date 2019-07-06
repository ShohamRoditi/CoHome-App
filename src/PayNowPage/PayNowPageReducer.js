import {
  UPDATE_DATE,
  UPDATE_PAID,
  UPDATE_EXPENSE_TYPE,
  DIALOG_STATE,
  INCORRECT_MODAL
} from './PayNowPageActionType'

const initialState = {
  date: '',
  paid: 0,
  expenseType: '',
  dialogState: false,
  incorrect: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATE:
      return {
        ...state,
        date: action.data
      }
    case UPDATE_EXPENSE_TYPE:
      return {
        ...state,
        expenseType: action.data
      }
    case UPDATE_PAID:
      return {
        ...state,
        paid: action.data
      }
    case DIALOG_STATE:
      return {
        ...state,
        dialogState: action.data
      }
    case INCORRECT_MODAL:
      return {
        ...state,
        incorrect: action.data
      }
    default:
      return state
  }
}
