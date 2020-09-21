import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Register from '../pages/Register'
import Welcome from '../pages/Welcome'
import FindStudent from '../pages/FindStudent'
import ConfirmPassword from '../pages/ConfirmPassword'

const Stack = createStackNavigator()

function AuthRoutes() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="FindStudent"
        component={FindStudent}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ConfirmPassword"
        component={ConfirmPassword}
      />
    </Stack.Navigator>
  )
}

export default AuthRoutes
