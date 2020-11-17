import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  loadModulesRequest: [],
  loadModulesSuccess: ['modules'],
  loadModulesFailure: ['error'],
  loadModuleRequest: ['module_id'],
  loadModuleSuccess: ['module'],
  loadModuleFailure: ['error'],
  setDelivery: ['delivery']
})

export const ModuleTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  delivery: null,
  module: null,
  modules: [],
  error: null,
  loading: false
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_MODULES_REQUEST]: (state, action) =>
    state.merge({
      error: false,
      loading: true
    }),

  [Types.LOAD_MODULES_SUCCESS]: (state, action) => {
    return state.merge({
      modules: action.modules,
      error: false,
      loading: false
    })
  },

  [Types.LOAD_MODULES_FAILURE]: (state, action) =>
    state.merge({
      error: action.error,
      loading: false
    }),

  [Types.LOAD_MODULE_REQUEST]: (state, action) =>
    state.merge({
      error: false,
      loading: true
    }),

  [Types.LOAD_MODULE_SUCCESS]: (state, action) => {
    return state.merge({
      module: action.module,
      error: false,
      loading: false
    })
  },

  [Types.LOAD_MODULE_FAILURE]: (state, action) =>
    state.merge({
      error: action.error,
      loading: false
    }),

  [Types.SET_DELIVERY]: (state, action) => {
    return state.merge({
      delivery: action.delivery
    })
  }
})
