import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { setNavigator } from '../services/navigation'

import AuthRoutes from './auth.routes'

const Routes = () => {
  return (
    <NavigationContainer ref={setNavigator}>
      <AuthRoutes />
    </NavigationContainer>
  )
}

export default Routes
