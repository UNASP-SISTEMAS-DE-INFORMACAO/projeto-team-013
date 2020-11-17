/* eslint-disable camelcase */
import { call, put, select } from 'redux-saga/effects'
import FileActions from '../ducks/file'
import { store } from '../../services/fileService'

export function* sendFileDelviery(action) {
  const { file } = action
  const module_id = yield select(state => state.module.module.id)
  const delivery_id = yield select(state => state.module.delivery.id)
  try {
    const file_delivery = yield call(store, file, module_id, delivery_id)
    yield put(FileActions.sendFileDeliverySuccess())
  } catch (error) {
    console.log(error)
    yield put(FileActions.sendFileDeliveryFailure())
  }
}
