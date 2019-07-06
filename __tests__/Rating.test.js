import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../src/rootReducer'
import RatingPageActions from '../src/RatingPage/RatingPageActions'

const middleware = applyMiddleware(thunk)
const composedEnhancers = compose(middleware)
const initialState = {}

describe('RatingPageActions Testing', () => {
  test('handleTenants RatingPageActions', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(RatingPageActions.myTenants()).toHaveProperty('type', 'MY_TENANTS')
    expect(store.getState().RatingPage).toHaveProperty('tenants', [])
    store.dispatch(RatingPageActions.handleTenants(['uri', 'shoham']))
    expect(store.getState().RatingPage).toHaveProperty('tenants', ['uri', 'shoham'])
  })

  test('handleBestScore RatingPageActions', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(RatingPageActions.highestScore()).toHaveProperty('type', 'HIGHEST_SCORE')
    expect(store.getState().RatingPage).toHaveProperty('highestScore', 0)
    store.dispatch(RatingPageActions.handleBestScore(40))
    expect(store.getState().RatingPage).toHaveProperty('highestScore', 40)
  })

  test('handleWantedPrize RatingPageActions', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(RatingPageActions.wantedPrize()).toHaveProperty('type', 'WANTED_PRIZE')
    expect(store.getState().RatingPage).toHaveProperty('prize', '')
    store.dispatch(RatingPageActions.handleWantedPrize('cake'))
    expect(store.getState().RatingPage).toHaveProperty('prize', 'cake')
  })
})
