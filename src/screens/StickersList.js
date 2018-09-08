import React, { Component } from 'react'

import { getStickers } from 'sagas/stickers'

import { g, screenWidth } from 'styles'

import Text from 'components/Text'
import View from 'components/View'
import Screen from 'components/Screen'
import HorizontalScroll from 'components/HorizontalScroll'
import StickerItem from './components/StickerItem'

export default class StickersList extends Component {
    render() {
        const { category, color, stickers } = getStickers()[2]
        return (
            <View isFlexible justify="center" style={{ backgroundColor: color }}>
                <HorizontalScroll
                    hasDots
                    hasTint
                    hasPaging
                    data={stickers}
                    renderItem={({ item, index }) => {
                        const { img } = item
                        return (
                            <StickerItem
                                index={index}
                                lastIndex={stickers.length - 1}
                                category={category}
                                image={img}
                            />
                        )
                    }}
                />
            </View>
        )
    }
}
