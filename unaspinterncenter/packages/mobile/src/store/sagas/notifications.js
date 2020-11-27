import { call, put } from 'redux-saga/effects'
import NotificationsActions from '../ducks/notifications'

import { loadNotifications } from '../../services/notificationService'

export function* loadNotification(ra) {
  try {
    const notifications = yield call(loadNotifications, ra)
    yield put(NotificationsActions.loadNotificationsSuccess(notifications))
  } catch (error) {
    yield put(NotificationsActions.loadNotificationsFailure(error))
  }
}
