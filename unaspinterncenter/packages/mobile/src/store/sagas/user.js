/* eslint-disable camelcase */
import { call, put } from 'redux-saga/effects'
import UserActions from '../ducks/user'

import { loadStudent } from '../../services/userService'

export function* load(ra) {
  const user = yield call(loadStudent, ra)
  yield put(UserActions.loadSuccess(user))
}
