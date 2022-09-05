import { combineReducers } from 'redux'
import Authenticated  from './auth'
import Message  from './message'

export default combineReducers({
    Authenticated,
    Message
})