import React, { Component } from 'react'

import { getStickers } from 'sagas/stickers'

import { g } from 'styles'

import Text from 'components/Text'
import View from 'components/View'
import Screen from 'components/Screen'
import HorizontalScroll from 'components/HorizontalScroll'
import StickerItem from './components/StickerItem'

export default class List extends Component {
    render() {
        const { category, stickers } = getStickers()[0]
        return (
            <Screen>
                <View justify="center">
                    <HorizontalScroll
                        hasDots
                        hasPaging
                        dotsColor="black"
                        separatorWidth={4}
                        intervalWidth={g(44)}
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
            </Screen>
        )
    }
}
