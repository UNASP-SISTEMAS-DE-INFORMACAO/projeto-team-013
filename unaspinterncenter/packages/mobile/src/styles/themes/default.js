import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default {
  colors: {
    white: '#FFF',
    lighter: '#EEE',
    light: '#242424',
    regular: '#BCBCBC',
    dark: '#666',
    darker: '#333',
    black: '#000',
    grey: '#EFEFEF',

    primary: '#0E395E',
    secundary: '#FF0000',
    success: '#9DCA83',
    danger: '#E37A7A',
    inative: '#18588F'
  },

  metrics: {
    baseMargin: 20,
    basePadding: 16,
    baseRadius: 20,
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width
  }
}
