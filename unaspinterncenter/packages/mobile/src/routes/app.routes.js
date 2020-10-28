/* eslint-disable react/display-name */
import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialIcons'

import NotificationIconTab from '../components/NotificationIconTab'

import Home from '../pages/Home'
import Modules from '../pages/Modules'
import ShowModule from '../pages/ShowModule'

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
          width: 328,
          borderRadius: 10,
          alignSelf: 'center',
          marginBottom: 20,
          backgroundColor: '#FFF',
          borderTopColor: '#FFF'
        },
        showLabel: false,
        activeTintColor: '#0E395E',
        inactiveTintColor: '#BABABA'
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
      <Tab.Screen name="Notifications" component={Home} />
      
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
    </Stack.Navigator>
  )
}
