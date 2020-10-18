import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { setNavigator } from '../services/navigation'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AuthActions from '../store/ducks/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes = ({ authenticated }) => {
  return (
    <NavigationContainer ref={setNavigator}>
      {authenticated ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
