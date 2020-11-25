import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  sendFileDeliveryRequest: ['file'],
  sendFileDeliverySuccess: ['file_delivery'],
  sendFileDeliveryFailure: ['error'],
  setFileDeliveries: ['file_deliveries'],
  updateFileDelivery: ['id', 'file']
})

export const FileTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  file_deliveries: [],
  error: null,
  loading: false
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEND_FILE_DELIVERY_REQUEST]: (state, action) =>
    state.merge({
      error: false,
      loading: true
    }),
  [Types.SEND_FILE_DELIVERY_SUCCESS]: (state, action) =>
    state.merge({
      error: false,
      loading: false,
      file_deliveries: [...state.file_deliveries, action.file_delivery]
    }),

  [Types.SEND_FILE_DELIVERY_FAILURE]: (state, action) =>
    state.merge({
      error: false,
      loading: false
    }),

  [Types.SET_FILE_DELIVERIES]: (state, action) => {
    return state.merge({
      file_deliveries: action.file_deliveries
    })
  },
  [Types.UPDATE_FILE_DELIVERY]: (state, action) => {
    const { file_deliveries } = state
    const fileIndex = file_deliveries.findIndex(
      file_delivery => file_delivery.file.id == action.id
    )
    const file = {
      id: action.id,
      key: action.file.name,
      url: action.file.uri
    }

    function updater(file_deliveries, index, file) {
      return file_deliveries.setIn([index, 'file'], file)
    }
    return state.update('file_deliveries', updater, fileIndex, file)
  }
})
