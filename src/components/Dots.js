import React from 'react'
import PropTypes from 'prop-types'
import { Animated, StyleSheet } from 'react-native'

import { g, colors, screenWidth } from 'styles/index'

import View from 'components/View'
import Separator from 'components/Separator'

const styles = StyleSheet.create({
    dotsWrapper: {
        height: g(2),
        width: g(2),
        marginHorizontal: 5,
        borderRadius: g(2) / 2,
        backgroundColor: colors.black
    }
})

export default function Dots({
    scrollX, data, width, color
}) {
    const position = Animated.divide(scrollX, width)
    return (
        <View align="center">
            <Separator height={4} />
            <View flexDir="row">
                { data.map((sticker) => {
                    const { key } = sticker
                    const opacity = position.interpolate({
                        inputRange: [key - 1, key, key + 1],
                        outputRange: [0.25, 1, 0.25],
                        extrapolate: 'clamp'
                    })
                    return (
                        <View
                            isAnimated
                            bgColor={color}
                            key={key}
                            style={[{ opacity }, styles.dotsWrapper]}
                        />
                    )
                })}
            </View>
        </View>
    )
}

Dots.propTypes = {
    scrollX: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    width: PropTypes.number,
    color: PropTypes.string
}

Dots.defaultProps = {
    width: screenWidth,
    color: 'black'

}
