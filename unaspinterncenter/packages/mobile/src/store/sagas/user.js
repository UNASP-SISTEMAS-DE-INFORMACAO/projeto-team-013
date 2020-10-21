/* eslint-disable camelcase */
import { call, put, select } from 'redux-saga/effects'
import UserActions from '../ducks/user'

import { loadStudent } from '../../services/userService'

export function* load() {
  const ra = yield select(state => state.auth.ra)
  const user = yield call(loadStudent, ra)
  yield put(UserActions.loadSuccess(user))
}
