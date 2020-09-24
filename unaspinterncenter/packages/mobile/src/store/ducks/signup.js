import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  findStudentRequest: ['ra'],
  findStudentSuccess: ['student'],
  findStudentFailure: ['error'],
  signUpRequest: ['student'],
  signUpSuccess: [],
  signUpFailure: ['error']
})

export const SignUpTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  error: null,
  student: null,
  loading: false
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FIND_STUDENT_REQUEST]: (state, action) =>
    state.merge({
      error: null,
      loading: true
    }),

  [Types.FIND_STUDENT_SUCCESS]: (state, action) =>
    state.merge({
      student: action.student,
      error: null,
      loading: false
    }),

  [Types.FIND_STUDENT_FAILURE]: (state, action) =>
    state.merge({
      error: action.error,
      loading: false
    }),

  [Types.SIGN_UP_REQUEST]: (state, action) =>
    state.merge({
      error: null,
      loading: true
    }),

  [Types.SIGN_UP_SUCCESS]: (state, action) =>
    state.merge({
      error: null,
      loading: false
    }),

  [Types.SIGN_UP_FAILURE]: (state, action) =>
    state.merge({
      error: action.error,
      loading: false
    })
})
