import { all, takeLatest } from 'redux-saga/effects'

import { SignUpTypes } from '../ducks/signup'
import { AuthTypes } from '../ducks/auth'
import { ModuleTypes } from '../ducks/module'
import { FileTypes } from '../ducks/file'
import { NotificationTypes } from '../ducks/notifications'

import { findStudent, createStudent } from './signup'
import { authenticate, isAuth } from './auth'
import { loadHome } from './home'
import { loadModules, loadModule } from './module'
import { sendFileDelviery, updateFileDelviery } from './file'
import { setNotifificationsAsSeen } from './notifications'
import { trySignOut } from './signout'

export default function * rootSaga() {
  return yield all([
    takeLatest(AuthTypes.IS_AUTHENTICATED, isAuth),
    takeLatest(AuthTypes.SIGN_OUT_REQUEST, trySignOut),
    takeLatest(SignUpTypes.FIND_STUDENT_REQUEST, findStudent),
    takeLatest(SignUpTypes.SIGN_UP_REQUEST, createStudent),
    takeLatest(AuthTypes.AUTH_REQUEST, authenticate),
    takeLatest(AuthTypes.AUTH_SUCCESS, loadHome),
    takeLatest(ModuleTypes.LOAD_MODULES_REQUEST, loadModules),
    takeLatest(ModuleTypes.LOAD_MODULE_REQUEST, loadModule),
    takeLatest(FileTypes.SEND_FILE_DELIVERY_REQUEST, sendFileDelviery),
    takeLatest(FileTypes.UPDATE_FILE_DELIVERY_REQUEST, updateFileDelviery),
    takeLatest(
      NotificationTypes.SET_NOTIFICATIONS_SEEN_REQUEST,
      setNotifificationsAsSeen
    )
  ])
}
