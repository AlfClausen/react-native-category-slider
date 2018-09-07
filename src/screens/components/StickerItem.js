import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Linking } from 'react-native'

import View from 'components/View'
import Img from 'components/Img'

import { g, screenWidth } from 'styles'

const styles = StyleSheet.create({
    circleWrapper: {
        height: screenWidth - g(16),
        width: screenWidth - g(16),
    },
    imageWrapper: {
        height: g(60),
        width: g(60),
    },
})

export default function StickerItem({ image }) {
    return (
        <View align="center" style={{ width: screenWidth, height: screenWidth }}>
            <View
                borderRadius="full"
                bgColor="white"
                style={styles.circleWrapper}
            >
                <View align="center" justify="center">
                    <Img name={image} style={styles.imageWrapper}/>
                </View>
            </View>
        </View>
    )
}

StickerItem.propTypes = {
    image: PropTypes.string
}
