import { call, put } from 'redux-saga/effects'

import { destroyToken } from '../../utils/user'
import AuthActions from '../ducks/auth'

export function * trySignOut(action) {
  try {
    yield call(destroyToken)
    yield put(AuthActions.signOutSuccess())
  } catch (erro) {
    yield put(AuthActions.signOutFailure())
  }
}
