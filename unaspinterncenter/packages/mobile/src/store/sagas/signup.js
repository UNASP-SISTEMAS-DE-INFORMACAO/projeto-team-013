/* eslint-disable camelcase */
import { call, put } from 'redux-saga/effects'
import SignUpActions from '../ducks/signup'

import { navigate } from '../../services/navigation'
import { findStudentByRA, create } from '../../services/signUpService'

export function* findStudent(action) {
  const { ra } = action
  try {
    const student = yield call(findStudentByRA, ra)
    if (!student) {
      yield put(
        SignUpActions.findStudentFailure(
          'Lamento, Não encontramos o RA digitado.'
        )
      )
      return
    }

    yield put(SignUpActions.findStudentSuccess(student))
    navigate('Register')
  } catch (error) {
    yield put(
      SignUpActions.findStudentFailure('Servidor inacessivel no momento')
    )
  }
}

export function* createStudent(action) {
  const { student } = action
  try {
    yield call(create, student)
    yield put(SignUpActions.signUpSuccess())
    alert('Usuario criado')
    navigate('Login')
  } catch (error) {
    let errroMessage = 'Servidor inacessivel no momento'
    if (error.response) {
      switch (error.response.status) {
        case 400:
          errroMessage =
            'Ocorreu um erro na criação do usuário. Tente novamente'
          break
        case 409:
          errroMessage = 'Aluno ja cadastrado'
          navigate('FindStudent')
          break
        default:
          errroMessage = 'Error'
          break
      }
    }
    yield put(SignUpActions.signUpFailure(errroMessage))
  }
}
