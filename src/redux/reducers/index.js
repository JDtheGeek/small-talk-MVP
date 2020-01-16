import authReducer from './authReducer'
import articleReducer from './articleReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  auth: authReducer,
  article: articleReducer
})
