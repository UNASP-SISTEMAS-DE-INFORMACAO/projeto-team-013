import { combineReducers } from 'redux'

import { reducer as signup } from './signup'
import { reducer as auth } from './auth'

const reducers = combineReducers({
  signup,
  auth
})

export default reducers
