import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  loadNotificationsRequest: [],
  loadNotificationsSuccess: ['notifications'],
  loadNotificationsFailure: ['error'],
  addNotification: ['notification']
})

export const NotificationTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  notifications: [],
  error: null,
  loading: false
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_NOTIFICATIONS_REQUEST]: (state, action) =>
    state.merge({
      error: false,
      loading: true
    }),

  [Types.LOAD_NOTIFICATIONS_SUCCESS]: (state, action) => {
    return state.merge({
      notifications: action.notifications,
      error: false,
      loading: false
    })
  },

  [Types.LOAD_NOTIFICATIONS_FAILURE]: (state, action) =>
    state.merge({
      error: action.error,
      loading: false
    }),

  [Types.ADD_NOTIFICATION]: (state, action) => {
    return state.merge({
      notifications: [...state.notifications, action.notification]
    })
  }
})
