import React from 'react';
import PropTypes from 'prop-types';
import { Text as ReactNativeText, ViewPropTypes, Animated, StyleSheet } from 'react-native'

import { colors } from 'styles'
import { sizeStyles } from 'styles/text'

const styles = StyleSheet.create({
    root: {
        backgroundColor: colors.transparent,
    }
})

const colorStyles = StyleSheet.create({
    black: {
        color: colors.black,
    }
})

const alignStyles = StyleSheet.create({
    center: { textAlign: 'center' },
    left: { textAlign: 'left' }
})

export default function Text({
    color = 'black',
    size = 'body',
    align = 'left',
    isAnimated = false,
    style,
    ...rest
}) {
    const props = {
        style: [
            styles.root,
            sizeStyles[size],
            alignStyles[align],
            colorStyles[color],
            style,
        ],
        ...rest,
    };
    return isAnimated ?
        <Animated.Text {...props}/> :
        <ReactNativeText {...props}/>
}

Text.propTypes = {
    color: PropTypes.oneOf(['black']),
    size: PropTypes.oneOf(['body']),
    align: PropTypes.oneOf(['left', 'center']),
    isAnimated: PropTypes.bool,
    style: ViewPropTypes.style
}
