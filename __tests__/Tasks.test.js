import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../src/rootReducer'
import TasksPageActions from '../src/TasksPage/TasksPageActions'

const middleware = applyMiddleware(thunk)
const composedEnhancers = compose(middleware)
const initialState = {}

describe('TasksPage Testing', () => {
  test('handleUpdateRate TasksPageActions', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(TasksPageActions.updateRate()).toHaveProperty('type', 'ADD_RATING')
    expect(store.getState().TasksPage).toHaveProperty('rate', 0)
    store.dispatch(TasksPageActions.handleUpdateRate(10))
    expect(store.getState().TasksPage).toHaveProperty('rate', 10)
  })
})
