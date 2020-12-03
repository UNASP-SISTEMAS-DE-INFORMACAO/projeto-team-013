import React, { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { setNavigator } from '../services/navigation'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AuthActions from '../store/ducks/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes = ({ authenticated, isAuthenticated, appLoading }) => {
  const preventSplashAutoHide = async () => {
    await SplashScreen.preventAutoHideAsync()
  }

  const hideSplashScreen = async () => {
    await SplashScreen.hideAsync()
  }

  useEffect(() => {
    preventSplashAutoHide()
    isAuthenticated()
  }, [])

  useEffect(() => {
    if (!appLoading) {
      setTimeout(() => {
        hideSplashScreen()
      }, 1000)
    }
  }, [appLoading])

  return (
    <NavigationContainer ref={setNavigator}>
      {authenticated ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  appLoading: state.auth.appLoading
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
