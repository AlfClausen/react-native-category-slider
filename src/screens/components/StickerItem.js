import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'

import View from 'components/View'
import Img from 'components/Img'

import { g, screenWidth } from 'styles'

const styles = StyleSheet.create({
    circleWrapper: {
        height: screenWidth - g(16),
        width: screenWidth - g(16),
        borderRadius: (screenWidth - g(16)) / 2
    },
    circleShadow: {
        shadowColor: '#000000',
        shadowRadius: 12,
        shadowOpacity: 0.5
    },
    imageWrapper: {
        height: screenWidth - g(48),
        width: screenWidth - g(48)
    }
})

export default class StickerItem extends PureComponent {
    static propTypes = {
        image: PropTypes.string
    }

    render() {
        const { image } = this.props
        return (
            <View
                align="center"
                justify="center"
                style={{ width: screenWidth, height: screenWidth }}
            >
                <View
                    align="center"
                    justify="center"
                    bgColor="white"
                    style={[styles.circleWrapper, styles.circleShadow]}
                >
                    <Img name={image} style={styles.imageWrapper} />
                </View>
            </View>
        )
    }
}
