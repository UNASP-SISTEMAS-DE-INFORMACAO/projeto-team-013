import { all, takeLatest } from 'redux-saga/effects'

import { SignUpTypes } from '../ducks/signup'
import { AuthTypes } from '../ducks/auth'
import { ModuleTypes } from '../ducks/module'

import { findStudent, createStudent } from './signup'
import { authenticate } from './auth'
import { load } from './user'
import { loadModule } from './module'

export default function* rootSaga() {
  return yield all([
    takeLatest(SignUpTypes.FIND_STUDENT_REQUEST, findStudent),
    takeLatest(SignUpTypes.SIGN_UP_REQUEST, createStudent),
    takeLatest(AuthTypes.AUTH_REQUEST, authenticate),
    takeLatest(AuthTypes.AUTH_SUCCESS, load),
    takeLatest(ModuleTypes.LOAD_MODULE_REQUEST, loadModule)
  ])
}
