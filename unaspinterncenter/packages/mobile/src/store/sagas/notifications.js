import { call, put, select } from 'redux-saga/effects'
import NotificationsActions from '../ducks/notifications'

import {
  loadNotifications,
  setNotifications
} from '../../services/notificationService'

export function* loadNotification(ra) {
  try {
    const notifications = yield call(loadNotifications, ra)
    yield put(NotificationsActions.loadNotificationsSuccess(notifications))
  } catch (error) {
    yield put(NotificationsActions.loadNotificationsFailure(error))
  }
}

export function* setNotifificationsAsSeen(action) {
  try {
    const ra = yield select(state => state.auth.ra)
    const { notifications } = action
    const updated_notifications = yield call(
      setNotifications,
      ra,
      notifications
    )
    yield put(
      NotificationsActions.setNotificationsSeenSuccess(updated_notifications)
    )
  } catch (error) {
    yield put(NotificationsActions.setNotificationsSeenFailure(error))
  }
}
