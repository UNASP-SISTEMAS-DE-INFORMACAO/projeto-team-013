/* eslint-disable react/display-name */
import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import NotificationIconTab from '../components/NotificationIconTab'

import Home from '../pages/Home'

const Tab = createBottomTabNavigator()

function AppRoutes() {
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
      <Tab.Screen name="Modules" component={Home} />
    </Tab.Navigator>
  )
}

export default AppRoutes
