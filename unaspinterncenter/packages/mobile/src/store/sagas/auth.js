/* eslint-disable camelcase */
import { call, put } from 'redux-saga/effects'
import AuthActions from '../ducks/auth'

import { signIn, decode } from '../../services/authService'
import { saveUser, getToken, getUserRa } from '../../utils/user'

export function* authenticate(action) {
  try {
    const { email, password } = action
    const response = yield call(signIn, email, password)
    const { token } = response
    const { ra } = decode(token)
    yield call(saveUser, token, ra)
    yield put(AuthActions.authSuccess(ra))
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
