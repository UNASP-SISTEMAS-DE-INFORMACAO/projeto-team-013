/* eslint-disable camelcase */
import { call, put, select } from 'redux-saga/effects'
import ModuleActions from '../ducks/module'

import { listModules, showModule } from '../../services/moduleService'

export function* loadModules() {
  const id_course = yield select(state => state.user.id_course)
  try {
    const modules = yield call(listModules, id_course)
    yield put(ModuleActions.loadModulesSuccess(modules))
  } catch (error) {
    yield put(ModuleActions.loadModulesFailure())
  }
}

export function* loadModule(action) {
  const { module_id } = action
  try {
    const modules = yield call(showModule, module_id)
    yield put(ModuleActions.loadModuleSuccess(modules))
  } catch (error) {
    yield put(ModuleActions.loadModuleFailure())
  }
}
