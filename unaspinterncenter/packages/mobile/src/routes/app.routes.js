/* eslint-disable react/display-name */
import * as React from 'react'
import { ThemeContext } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialIcons'

import NotificationIconTab from '../components/NotificationIconTab'

import Home from '../pages/Home'
import Modules from '../pages/Modules'
import ShowModule from '../pages/ShowModule'
import Profile from '../pages/Profile'
import Notification from '../pages/Notification'
import FileDelivery from '../pages/FileDelivery'
import Internships from '../pages/Internships'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function TabRoutes() {
  const icons = {
    Home: {
      name: 'home'
    },
    Profile: {
      name: 'person'
    },
    Modules: {
      name: 'add'
    }
  }

  const { metrics } = React.useContext(ThemeContext)

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Notifications') {
            return (
              <NotificationIconTab
                focused={focused}
                onPress={() => navigation.navigate('Notifications')}
              />
            )
          }
          const { name } = icons[route.name]
          return <Icon name={name} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        style: {
          height: 55,
          width: metrics.sceenWidth,
          borderRadius: 10,
          marginBottom: 20,
          backgroundColor: '#FFF',
          borderTopColor: '#FFF',
          position: 'absolute',
          margin: 32
        },
        showLabel: false,
        activeTintColor: '#0E395E',
        inactiveTintColor: '#BABABA'
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Notifications" component={Notification} />
      <Tab.Screen name="Modules" component={Modules} />
    </Tab.Navigator>
  )
}

export default function DashboardRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="Dashboard"
        component={TabRoutes}
      />

      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="Modules"
        component={Modules}
      />

      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="ShowModule"
        component={ShowModule}
      />

      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="FileDelivery"
        component={FileDelivery}
      />

      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="Internships"
        component={Internships}
      />
    </Stack.Navigator>
  )
}
