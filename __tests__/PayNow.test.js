import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../src/rootReducer'
import PayNowPageActions from '../src/PayNowPage/PayNowPageActions'

const middleware = applyMiddleware(thunk)
const composedEnhancers = compose(middleware)
const initialState = {}

describe('PayNowActions Testing', () => {
  test('handleDialogState PayNowPageActions', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(PayNowPageActions.updateDialogState()).toHaveProperty('type', 'DIALOG_STATE')
    expect(store.getState().PayNowPage).toHaveProperty('dialogState', false)
    store.dispatch(PayNowPageActions.handleDialogState(true))
    expect(store.getState().PayNowPage).toHaveProperty('dialogState', true)
  })

  test('handleUpdateDate PayNowPageActions', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(PayNowPageActions.updateDate()).toHaveProperty('type', 'UPDATE_DATE')
    expect(store.getState().PayNowPage).toHaveProperty('date', '')
    store.dispatch(PayNowPageActions.handleUpdateDate('01/01/2019'))
    expect(store.getState().PayNowPage).toHaveProperty('date', '01/01/2019')
  })

  test('handleUpdateExpenseType PayNowPageActions', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(PayNowPageActions.updateExpenseType()).toHaveProperty('type', 'UPDATE_EXPENSE_TYPE')
    expect(store.getState().PayNowPage).toHaveProperty('expenseType', '')
    store.dispatch(PayNowPageActions.handleUpdateExpenseType('water'))
    expect(store.getState().PayNowPage).toHaveProperty('expenseType', 'water')
  })

  test('handleUpdatePaid PayNowPageActions', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(PayNowPageActions.updatePaid()).toHaveProperty('type', 'UPDATE_PAID')
    expect(store.getState().PayNowPage).toHaveProperty('paid', 0)
    store.dispatch(PayNowPageActions.handleUpdatePaid(100))
    expect(store.getState().PayNowPage).toHaveProperty('paid', 100)
  })

  test('handleIncorrectModal PayNowPageActions', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(PayNowPageActions.incorrectModal()).toHaveProperty('type', 'INCORRECT_MODAL')
    expect(store.getState().PayNowPage).toHaveProperty('incorrect', false)
    store.dispatch(PayNowPageActions.handleIncorrectModal(true))
    expect(store.getState().PayNowPage).toHaveProperty('incorrect', true)
  })
})
