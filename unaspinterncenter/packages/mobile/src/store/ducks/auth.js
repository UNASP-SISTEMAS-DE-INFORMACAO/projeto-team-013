import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  authRequest: ['email', 'password'],
  authSuccess: ['ra'],
  authFailure: ['error'],
  isAuthenticated: [],
  signOutRequest: [],
  signOutSuccess: ['error'],
  signOutFailure: []
})

export const AuthTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  ra: null,
  authenticated: false,
  error: null,
  loading: false,
  appLoading: true
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_REQUEST]: (state, action) =>
    state.merge({
      authenticated: false,
      error: false,
      loading: true
    }),

  [Types.AUTH_SUCCESS]: (state, action) => {
    return state.merge({
      ra: action.ra,
      authenticated: true,
      error: false,
      loading: false,
      appLoading: false
    })
  },

  [Types.AUTH_FAILURE]: (state, action) =>
    state.merge({
      authenticated: false,
      error: action.error,
      loading: false,
      appLoading: false
    }),

  [Types.IS_AUTHENTICATED]: (state, action) =>
    state.merge({
      error: null
    }),

  [Types.SIGN_OUT_REQUEST]: (state, action) =>
    state.merge({
      error: null
    }),

  [Types.SIGN_OUT_SUCCESS]: (state, action) =>
    state.merge({
      authenticated: false,
      error: action.error
    }),

  [Types.SIGN_OUT_FAILURE]: (state, action) =>
    state.merge({
      error: null
    })
})
