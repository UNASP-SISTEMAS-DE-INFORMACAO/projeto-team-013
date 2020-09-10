import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    colors: {
        white: '#FFF',
        lighter: '#EEE',
        light: '#242424',
        regular: '#BCBCBC',
        dark: '#666',
        darker: '#333',
        black: '#000',

        primary: '#111111',
        secundary: '#C3505E',
        success: '#9DCA83',
        danger: '#E37A7A',
        inative: '#A8A8A8',
    },

    metrics: {
        baseMargin: 10,
        basePadding: 16,
        baseRadius: 10,
        screenWidth: width < height ? width : height,
        screenHeight: width < height ? height : width,
    },
};