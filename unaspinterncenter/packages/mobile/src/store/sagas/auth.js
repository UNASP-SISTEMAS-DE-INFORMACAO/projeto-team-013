/* eslint-disable camelcase */
import { call, put } from 'redux-saga/effects'
import AuthActions from '../ducks/auth'

import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
import { Platform } from 'react-native'

import { signIn, decode } from '../../services/authService'
import { updateStudent } from '../../services/userService'
import { saveUser, getToken, getUserRa } from '../../utils/user'

async function registerForPushNotificationsAsync() {
  let token
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    )
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
      finalStatus = status
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!')
      return
    }
    token = (await Notifications.getExpoPushTokenAsync()).data
  } else {
    alert('Must use physical device for Push Notifications')
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C'
    })
  }

  return token
}

export function* authenticate(action) {
  try {
    const { email, password } = action
    const response = yield call(signIn, email, password)
    const { token, expo_token } = response
    const { ra } = decode(token)
    yield call(saveUser, token, ra)
    yield put(AuthActions.authSuccess(ra))
    const new_expo_token = yield call(registerForPushNotificationsAsync)

    if (!expo_token || new_expo_token != expo_token) {
      const user = {
        expo_token: new_expo_token
      }
      yield call(updateStudent, user, ra)
    }
  } catch (error) {
    let errroMessage = 'Servidor inacessivel no momento'
    if (error.response) {
      const { status } = error.response
      switch (status) {
        case 400:
          errroMessage = 'Erro no preenchimento dos campos'
          break
        case 401:
          errroMessage = 'Email ou senha incorreta'
          break
        case 404:
          errroMessage = 'Email ou senha incorreta'
          break
        default:
          errroMessage = 'Error'
          break
      }
    }
    yield put(AuthActions.authFailure(errroMessage))
  }
}

export function* isAuth() {
  const token = yield call(getToken)
  if (token) {
    const id = yield call(getUserRa)
    yield put(AuthActions.authSuccess(id))
  } else {
    yield put(AuthActions.authFailure())
  }
}
