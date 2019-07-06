import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../src/rootReducer'
import SignInPageActions from '../src/SignInPage/SignInPageActions'

const middleware = applyMiddleware(thunk)
const composedEnhancers = compose(middleware)
const initialState = {}

describe('SignInPage Testing', () => {
  test('handleName SignInPageActions', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(SignInPageActions.myName()).toHaveProperty('type', 'MY_NAME')
    expect(store.getState().SignInPage).toHaveProperty('myName', '')
    store.dispatch(SignInPageActions.handleName('dan'))
    expect(store.getState().SignInPage).toHaveProperty('myName', 'dan')
  })

  test('handleAddress SignInPageActions', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(SignInPageActions.myAddress()).toHaveProperty('type', 'INIT_ADDRESS')
    expect(store.getState().SignInPage).toHaveProperty('myAddress', '')
    store.dispatch(SignInPageActions.handleAddress('Lorum Street 3'))
    expect(store.getState().SignInPage).toHaveProperty('myAddress', 'Lorum Street 3')
  })

  test('handleApartment SignInPageActions', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(SignInPageActions.myApartment()).toHaveProperty('type', 'GET_APARTMENT')
    expect(store.getState().SignInPage).toHaveProperty('myApartment', null)
  })

  test('handlePic SignInPageActions', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(SignInPageActions.myPic()).toHaveProperty('type', 'PROFILE_PIC')
    expect(store.getState().SignInPage).toHaveProperty('profilePic', '')
    store.dispatch(SignInPageActions.handlePic('New Image'))
    expect(store.getState().SignInPage).toHaveProperty('profilePic', 'New Image')
  })

  test('handleModalState SignInPageActions', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(SignInPageActions.modalState()).toHaveProperty('type', 'CHANGE_MODAL_STATE')
    expect(store.getState().SignInPage).toHaveProperty('modalState', false)
    store.dispatch(SignInPageActions.handleModalState(true))
    expect(store.getState().SignInPage).toHaveProperty('modalState', true)
  })
})
