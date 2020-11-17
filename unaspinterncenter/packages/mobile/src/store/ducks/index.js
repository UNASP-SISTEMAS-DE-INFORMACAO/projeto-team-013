import { combineReducers } from 'redux'

import { reducer as signup } from './signup'
import { reducer as auth } from './auth'
import { reducer as user } from './user'
import { reducer as module } from './module'
import { reducer as file } from './file'

const reducers = combineReducers({
  signup,
  auth,
  user,
  module,
  file
})

export default reducers
