import { StyleSheet } from 'react-native'
import { colors } from 'styles'

const defaultText = { color: colors.black }

export const sizeStyles = StyleSheet.create({
    title1: {
        ...defaultText,
        fontSize: 32,
        lineHeight: 38
    },
    title2: {
        ...defaultText,
        fontSize: 26,
        lineHeight: 32
    },
    title3: {
        ...defaultText,
        fontSize: 22,
        lineHeight: 26
    },
    title4: {
        ...defaultText,
        fontSize: 20,
        lineHeight: 24
    },
    headline: {
        ...defaultText,
        fontSize: 18,
        lineHeight: 19
    },
    body: {
        ...defaultText,
        fontSize: 17,
        lineHeight: 23
    },
    subhead: {
        ...defaultText,
        fontSize: 15,
        lineHeight: 18
    }
})
