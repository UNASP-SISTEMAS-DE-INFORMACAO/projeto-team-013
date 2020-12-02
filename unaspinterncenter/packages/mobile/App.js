import './src/config/ReactotronConfig'

import * as Notifications from 'expo-notifications'

import 'react-native-gesture-handler'
import React, { useState, useEffect, useRef } from 'react'
import { ThemeProvider } from 'styled-components/native'

import { Provider } from 'react-redux'

import store from './src/store/index'

import Routes from './src/routes/index'
import theme from './src/styles/themes/default'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
})

export default function App() {
  const [notification, setNotification] = useState(false)
  const notificationListener = useRef()
  const responseListener = useRef()

  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener(
      notification => {
        setNotification(notification)
      }
    )

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      response => {
        console.log(response)
      }
    )

    return () => {
      Notifications.removeNotificationSubscription(notificationListener)
      Notifications.removeNotificationSubscription(responseListener)
    }
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}
