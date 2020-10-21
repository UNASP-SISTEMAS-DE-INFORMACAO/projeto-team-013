import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  loadRequest: [],
  loadSuccess: ['user'],
  loadFailure: ['error']
})

export const UserTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  id_course: null,
  name: null,
  email: null,
  error: null,
  loading: false
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_REQUEST]: (state, action) =>
    state.merge({
      error: false,
      loading: true
    }),

  [Types.LOAD_SUCCESS]: (state, action) => {
    return state.merge({
      id_course: action.user.id_course,
      name: action.user.name,
      email: action.user.email,
      error: false,
      loading: false
    })
  },

  [Types.LOAD_FAILURE]: (state, action) =>
    state.merge({
      error: action.error,
      loading: false
    })
})
