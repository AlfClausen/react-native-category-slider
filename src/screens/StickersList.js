import React, { Component } from 'react'
import { FlatList, StyleSheet, Animated } from 'react-native'

import { getCategories, getStickers } from 'sagas/stickers'

import { g, colors, screenWidth } from 'styles'

import Text from 'components/Text'
import View from 'components/View'
import Separator from 'components/Separator'
import HorizontalScroll from 'components/HorizontalScroll'
import StickerItem from './components/StickerItem'
import TabItem from './components/TabItem'

const styles = StyleSheet.create({
    dotsWrapper: {
        height: g(2),
        width: g(2),
        marginHorizontal: 5,
        borderRadius: g(2) / 2,
        backgroundColor: colors.black
    },
    containerShadow: {
        shadowColor: '#000000',
        shadowRadius: 12,
        shadowOpacity: 0.5
    }
})

export default class StickersList extends Component {
    state = {
        tab: getCategories()[0].category,
        scrollX: 0
    }

    onSelectTab = (category) => {
        this.setState({
            tab: category,
            scrollX: 0
        })
        this.scrollBack()
    }
    scrollBack = () => {
        this.refs.listRef.scrollToOffset({ x: 0, y: 0, animated: false })
    }
    renderTabs() {
        const { tab } = this.state
        return (
            <View align="start">
                <FlatList
                    horizontal
                    scrollEnabled
                    data={getCategories()}
                    onScroll={() => {}}
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
        const handleScroll = (e) => {
            const { contentOffset } = e.nativeEvent
            // console.log('nativeEvent ', e.nativeEvent)
            this.setState({ scrollX: contentOffset.x })
        }
        return (
            <View>
                <FlatList
                    ref="listRef"
                    horizontal
                    scrollEnabled
                    pagingEnabled
                    data={getCategories(this.state.tab).stickers}
                    onScroll={handleScroll}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        const { category, img } = item
                        return (
                            <StickerItem
                                image={img}
                            />
                        )
                    }}
                    style={styles.containerShadow}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
    renderDots() {
        const position = Animated.divide(this.state.scrollX, screenWidth)
        return (
            <View align="center">
                <Separator height={4} />
                <View flexDir="row">
                    { getCategories(this.state.tab).stickers.map((_, i) => {
                        const opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.25, 1, 0.25],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={[{ opacity }, styles.dotsWrapper,]}
                            />
                        )
                    })}
                </View>
            </View>
        )
    }
    render() {
        return (
            <View isFlexible justify="center" style={{ backgroundColor: 'pink' }}>
            {/*<View isFlexible justify="center" style={{ backgroundColor: color }}>*/}
                { this.renderTabs() }
                { this.renderStickers() }
                { this.renderDots() }
            </View>
        )
    }
}
