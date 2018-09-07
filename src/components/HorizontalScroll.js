import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, Platform, StyleSheet, Animated } from 'react-native'

import View from 'components/View'
import Separator from 'components/Separator'

import { g, colors, screenWidth } from 'styles'

const styles = StyleSheet.create({
    dotsWrapper: {
        height: 7,
        width: 7,
        marginHorizontal: 5,
        borderRadius: 5,
        backgroundColor: colors.black
    },
    containerShadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 12,
        shadowOpacity: 0.3
    }
})

export default class HorizontalScroll extends Component {
    static propTypes = {
        data: PropTypes.any.isRequired,
        renderItem: PropTypes.any.isRequired,
        alignItem: PropTypes.oneOf(['start', 'center', 'end']),
        intervalWidth: PropTypes.number,
        hasDots: PropTypes.bool,
        hasTint: PropTypes.bool,
        hasPaging: PropTypes.bool
    }
    static defaultProps = {
        alignItem: 'start',
        intervalWidth: screenWidth,
    }
    state = {
        scrollX: 0
    }
    render() {
        const {
            hasDots, hasTint, hasPaging, alignItem, intervalWidth, data, renderItem
        } = this.props
        const position = Animated.divide(this.state.scrollX, intervalWidth)
        const handleScroll = (e) => {
            const { contentOffset } = e.nativeEvent
            // console.log('nativeEvent ', e.nativeEvent)
            this.setState({ scrollX: contentOffset.x })
        }
        return (
            <View>
                <FlatList
                    horizontal
                    scrollEnabled
                    pagingEnabled={hasPaging}
                    // snapToInterval={intervalWidth} // Paging on iOS
                    snapToAlignment={alignItem}
                    style={ hasTint ? [styles.containerShadow] : null }
                    data={data}
                    renderItem={renderItem}
                    onScroll={handleScroll}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                />
                { hasDots && data.length > 1 &&
                    <View align="center">
                        <Separator height={4} />
                        <View flexDir="row">
                            { data.map((_, i) => {
                                const opacity = position.interpolate({
                                    inputRange: [i - 1, i, i + 1],
                                    outputRange: [0.34, 1, 0.34],
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
                }
            </View>
        )
    }
}

