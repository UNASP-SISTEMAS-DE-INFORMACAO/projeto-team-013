import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  loadModuleRequest: [],
  loadModuleSuccess: ['modules'],
  loadModuleFailure: ['error']
})

export const ModuleTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  modules: [],
  error: null,
  loading: false
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_MODULE_REQUEST]: (state, action) =>
    state.merge({
      error: false,
      loading: true
    }),

  [Types.LOAD_MODULE_SUCCESS]: (state, action) => {
    return state.merge({
      modules: action.modules,
      error: false,
      loading: false
    })
  },

  [Types.LOAD_MODULE_FAILURE]: (state, action) =>
    state.merge({
      error: action.error,
      loading: false
    })
})
