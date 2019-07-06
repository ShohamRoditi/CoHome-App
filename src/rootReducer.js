import { combineReducers } from 'redux'
import SignInPageReducer from './SignInPage/SignInPageReducer'
import PayNowPageReducer from './PayNowPage/PayNowPageReducer'
import TasksPageReducer from './TasksPage/TasksPageReducer'
import RatingPageReducer from './RatingPage/RatingPageReducer'

export default combineReducers({
  SignInPage: SignInPageReducer,
  PayNowPage: PayNowPageReducer,
  TasksPage: TasksPageReducer,
  RatingPage: RatingPageReducer
})
