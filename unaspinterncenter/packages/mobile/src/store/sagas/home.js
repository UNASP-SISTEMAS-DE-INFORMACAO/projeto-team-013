import { call, fork, select } from 'redux-saga/effects'

import { load } from './user'
import { loadNotification } from './notifications'

export function* loadHome() {
  try {
    const ra = yield select(state => state.auth.ra)
    yield call(load, ra)
    yield fork(loadNotification, ra)
  } catch (error) {}
}
