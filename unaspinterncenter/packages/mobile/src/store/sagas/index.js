import { all, takeLatest } from 'redux-saga/effects'

import { SignUpTypes } from '../ducks/signup'

import { findStudent, createStudent } from './signup'

export default function* rootSaga() {
  return yield all([
    takeLatest(SignUpTypes.FIND_STUDENT_REQUEST, findStudent),
    takeLatest(SignUpTypes.SIGN_UP_REQUEST, createStudent)
  ])
}
