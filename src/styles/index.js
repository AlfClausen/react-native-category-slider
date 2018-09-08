import { Dimensions } from 'react-native'

export const screenWidth = Dimensions.get('window').width
export const screenHeight = Dimensions.get('window').height

export const g = (times = 1) => times * 4

export const colors = {
    white: '#FFFFFF',
    black: '#000000',
    inactive: 'rgba(255, 255, 255, 0.38)',
    transparent: 'transparent'
}
