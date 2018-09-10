import React, { Component } from 'react'
import { FlatList, StyleSheet, Animated } from 'react-native'

import { getCategories, getStickers } from 'sagas/stickers'

import { g, colors, screenWidth } from 'styles'

import View from 'components/View'
import Separator from 'components/Separator'
import StickerItem from './components/StickerItem'
import TabItem from './components/TabItem'

const styles = StyleSheet.create({
    dotsWrapper: {
        height: g(2),
        width: g(2),
        marginHorizontal: 5,
        borderRadius: g(2) / 2,
        backgroundColor: colors.black
    }
})

export default class StickersList extends Component {
    state = {
        tab: getCategories()[0].category,
        scrollX: 0
    }
    onSelectTab = (category) => {
        const stickerKey = getCategories(category).stickers[0].key
        this.setState({
            tab: category,
            scrollX: screenWidth * stickerKey
        })
        this.tabsListRef.scrollToIndex({ animated: true, index: getCategories(category).id });
        this.stickersListRef.scrollToIndex({ animated: false, index: stickerKey });
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
                    onScrollToIndexFailed={()=>{}}
                    showsHorizontalScrollIndicator={false}
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
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
    renderStickers() {
        const { tab } = this.state
        const getItemLayout = (data, index) => (
            { length: screenWidth, offset: screenWidth * index, index }
        )
        const handleScroll = (event) => {
            const { contentOffset } = event.nativeEvent
            const index = Math.round(contentOffset.x / screenWidth)
            this.setState({
                scrollX: contentOffset.x,
                tab: getStickers()[index].category
            })
            this.tabsListRef.scrollToIndex({ animated: true, index: getStickers()[index].id });
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
                        const { category, img } = item
                        return (
                            <StickerItem
                                image={img}
                            />
                        )
                    }}
                    keyExtractor={(item) => item.key.toString()}
                />
            </View>
        )
    }
    renderDots() {
        const { tab, scrollX } = this.state
        const position = Animated.divide(scrollX, screenWidth)
        return (
            <View align="center">
                <Separator height={4} />
                <View flexDir="row">
                    { getCategories(tab).stickers.map((sticker) => {
                        const { key } = sticker
                        const opacity = position.interpolate({
                            inputRange: [key - 1, key, key + 1],
                            outputRange: [0.25, 1, 0.25],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={key}
                                style={[{ opacity }, styles.dotsWrapper,]}
                            />
                        )
                    })}
                </View>
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
                { this.renderDots() }
            </View>
        )
    }
}
