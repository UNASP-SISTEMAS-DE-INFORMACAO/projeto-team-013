import { combineReducers } from 'redux'

import { reducer as signup } from './signup'
import { reducer as auth } from './auth'
import { reducer as user } from './user'
import { reducer as module } from './module'

const reducers = combineReducers({
  signup,
  auth,
  user,
  module
})

export default reducers
