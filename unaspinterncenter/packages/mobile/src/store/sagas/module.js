/* eslint-disable camelcase */
import { call, put, select } from 'redux-saga/effects'
import ModuleActions from '../ducks/module'

import { listModules } from '../../services/moduleService'

export function* loadModule() {
  const id_course = yield select(state => state.user.id_course)
  try {
    const modules = yield call(listModules, id_course)
    yield put(ModuleActions.loadModuleSuccess(modules))
  } catch (error) {
    yield put(ModuleActions.loadModuleFailure())
  }
}
