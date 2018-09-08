import React, { Component } from 'react'

import { getStickers } from 'sagas/stickers'

import { g, screenWidth } from 'styles'

import Text from 'components/Text'
import View from 'components/View'
import Screen from 'components/Screen'
import HorizontalScroll from 'components/HorizontalScroll'
import StickerItem from './components/StickerItem'
import TabItem from './components/TabItem'

export default class StickersList extends Component {
    state = {
        tab: getStickers()[0].category
    }
    onSelectTab = (category) => {
        this.setState({ tab: category })
    }
    renderTabs() {
        const { tab } = this.state
        return (
            <HorizontalScroll
                align="start"
                data={getStickers()}
                renderItem={({ item }) => {
                    const { category, title } = item
                    return (
                        <TabItem
                            title={title}
                            currentTab={tab}
                            tabId={category}
                            onPress={category => this.onSelectTab(category)}
                        />
                    )
                }}
            />
        )
    }
    render() {
        const { tab } = this.state
        const { category, color, stickers } = getStickers(tab)
        return (
            <View isFlexible justify="center" style={{ backgroundColor: color }}>
                { this.state.tab &&
                    this.renderTabs()
                }
                <HorizontalScroll
                    hasDots
                    hasTint
                    hasPaging
                    data={stickers}
                    renderItem={({ item }) => {
                        const { img } = item
                        return (
                            <StickerItem
                                image={img}
                            />
                        )
                    }}
                />
            </View>
        )
    }
}
