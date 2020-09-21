import './src/config/ReactotronConfig'

import 'react-native-gesture-handler'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import { Provider } from 'react-redux'

import store from './src/store/index'

import Routes from './src/routes/index'
import theme from './src/styles/themes/default'

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}
