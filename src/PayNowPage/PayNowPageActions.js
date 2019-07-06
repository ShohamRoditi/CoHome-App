import {
  UPDATE_DATE,
  UPDATE_EXPENSE_TYPE,
  UPDATE_PAID,
  DIALOG_STATE,
  INCORRECT_MODAL
} from './PayNowPageActionType'

const updateDialogState = dialogState => ({ type: DIALOG_STATE, data: dialogState })

const handleDialogState = dialogState => dispatch => {
  dispatch(updateDialogState(dialogState))
}

const updateDate = date => ({ type: UPDATE_DATE, data: date })

const handleUpdateDate = date => dispatch => {
  dispatch(updateDate(date))
}

const updateExpenseType = type => ({ type: UPDATE_EXPENSE_TYPE, data: type })

const handleUpdateExpenseType = type => dispatch => {
  dispatch(updateExpenseType(type))
}

const updatePaid = paid => ({ type: UPDATE_PAID, data: paid })

const handleUpdatePaid = paid => dispatch => {
  dispatch(updatePaid(paid))
}

const incorrectModal = incorrect => ({ type: INCORRECT_MODAL, data: incorrect })

const handleIncorrectModal = modalState => dispatch => {
  dispatch(incorrectModal(modalState))
}

const handlePayment = (address, expenseType, paid, date, name) => async () => {
  const paymentType = JSON.stringify({
    address,
    monthly_payment: {
      type: expenseType,
      status_paid: 'true',
      paid,
      date,
      paid_by: name
    },
    tenants: {
      name
    }
  })
  await fetch(`https://co-home-household-app.herokuapp.com/updateExpenses`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: paymentType
  })
}

export default {
  handlePayment,
  handleUpdateDate,
  handleUpdateExpenseType,
  handleUpdatePaid,
  updateDate,
  updateExpenseType,
  updatePaid,
  handleDialogState,
  updateDialogState,
  handleIncorrectModal,
  incorrectModal
}
