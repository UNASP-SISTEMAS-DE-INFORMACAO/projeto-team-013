import { all, takeLatest } from 'redux-saga/effects'

import { SignUpTypes } from '../ducks/signup'
import { AuthTypes } from '../ducks/auth'

import { findStudent, createStudent } from './signup'
import { authenticate } from './auth'

export default function* rootSaga() {
  return yield all([
    takeLatest(SignUpTypes.FIND_STUDENT_REQUEST, findStudent),
    takeLatest(SignUpTypes.SIGN_UP_REQUEST, createStudent),
    takeLatest(AuthTypes.AUTH_REQUEST, authenticate)
  ])
}
