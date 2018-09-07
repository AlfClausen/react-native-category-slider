import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Linking } from 'react-native'

import Text from 'components/Text'
import View from 'components/View'
import Img from 'components/Img'
import Separator from 'components/Separator'

import { g, screenWidth } from 'styles'

const styles = StyleSheet.create({
    container: {
        height: g(44),
        width: g(44)
    }
})

export default function StickerItem({ index, lastIndex, category, image }) {
    return (
        <View flexDir="row">
            { index === 0 && <Separator width={4} /> }
            <View
                isFlexible
                borderRadius="full"
                bgColor="black"
                style={styles.container}
            >
                <View align="center" justify="center">
                    <Img category={category} name={image} style={styles.container}/>
                </View>
            </View>
            { index === lastIndex && <Separator width={4} /> }
        </View>
    )
}

StickerItem.propTypes = {
    index: PropTypes.number.isRequired,
    lastIndex: PropTypes.number.isRequired,
    category: PropTypes.string,
    image: PropTypes.string
}
