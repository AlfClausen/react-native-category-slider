import React, { Component } from 'react'
import { FlatList } from 'react-native'

import { getCategories, getStickers } from 'sagas/stickers'

import { screenWidth } from 'styles'

import View from 'components/View'
import Dots from 'components/Dots'
import StickerItem from './components/StickerItem'
import TabItem from './components/TabItem'

export default class StickersList extends Component {
    state = {
        tab: getCategories(0).id,
        scrollX: 0
    }

    onSelectTab = (tabId) => {
        const stickerKey = getCategories(tabId).stickers[0].key
        this.setState({
            tab: tabId,
            scrollX: screenWidth * stickerKey
        })
        this.tabsListRef.scrollToIndex({ animated: true, index: tabId })
        this.stickersListRef.scrollToIndex({ animated: false, index: stickerKey })
    }

    renderTabs() {
        const { tab } = this.state
        const getItemLayout = (data, index) => (
            // In the future we should check every variable row width
            { length: 60, offset: 40 * index, index }
        )
        return (
            <View align="start">
                <FlatList
                    ref={(ref) => { this.tabsListRef = ref }}
                    horizontal
                    scrollEnabled
                    getItemLayout={getItemLayout}
                    data={getCategories()}
                    onScroll={() => {}}
                    onScrollToIndexFailed={() => {}}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        const { id, category } = item
                        return (
                            <TabItem
                                title={category}
                                currentTab={tab}
                                tabId={id}
                                onPress={this.onSelectTab}
                            />
                        )
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }

    renderStickers() {
        const getItemLayout = (data, index) => (
            { length: screenWidth, offset: screenWidth * index, index }
        )
        const handleScroll = (event) => {
            const { contentOffset } = event.nativeEvent
            const index = Math.round(contentOffset.x / screenWidth)
            this.setState({
                scrollX: contentOffset.x,
                tab: getStickers()[index].id
            })
            this.tabsListRef.scrollToIndex({ animated: true, index: getStickers()[index].id })
        }
        return (
            <View>
                <FlatList
                    ref={(ref) => { this.stickersListRef = ref }}
                    horizontal
                    scrollEnabled
                    pagingEnabled
                    data={getStickers()}
                    getItemLayout={getItemLayout}
                    onScroll={handleScroll}
                    initialNumToRender={3}
                    maxToRenderPerBatch={3}
                    onEndReachedThreshold={0.5}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        const { img } = item
                        return (
                            <StickerItem
                                image={img}
                            />
                        )
                    }}
                    keyExtractor={item => item.key.toString()}
                />
            </View>
        )
    }

    render() {
        const { tab, scrollX } = this.state
        return (
            <View
                isFlexible
                justify="center"
                style={{ backgroundColor: getCategories(tab).color }}
            >
                { this.renderTabs() }
                { this.renderStickers() }
                <Dots
                    scrollX={scrollX}
                    data={getCategories(tab).stickers}
                />
            </View>
        )
    }
}
