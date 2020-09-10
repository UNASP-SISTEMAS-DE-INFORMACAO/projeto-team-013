import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import Routes from './src/routes/index';
import theme from './src/styles/themes/default';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}