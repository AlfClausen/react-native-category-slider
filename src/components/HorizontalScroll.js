import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, Platform, StyleSheet, Animated } from 'react-native'

import View from 'components/View'
import Separator from 'components/Separator'

import { g, colors } from 'styles'

const dotsColorStyles = StyleSheet.create({
    white: { backgroundColor: colors.white },
    black: { backgroundColor: colors.black }
})

const styles = StyleSheet.create({
    dotsWrapper: {
        height: g(1.5),
        width: g(1.5),
        marginHorizontal: g(1),
        borderRadius: 5
    },
    containerShadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 0.1
    }
})

export default class HorizontalScroll extends Component {
    static propTypes = {
        data: PropTypes.any.isRequired,
        renderItem: PropTypes.any.isRequired,
        align: PropTypes.string, // enum typecheck in View
        alignItem: PropTypes.oneOf(['start', 'center', 'end']),
        intervalWidth: PropTypes.number,
        separatorWidth: PropTypes.number,
        hasDots: PropTypes.bool,
        dotsColor: PropTypes.oneOf(['white', 'black']),
        hasTint: PropTypes.bool,
        hasPaging: PropTypes.bool
    }
    static defaultProps = {
        separatorWidth: 0,
        align: 'center',
        alignItem: 'start',
        intervalWidth: 1,
        dotsColor: 'white'
    }
    state = {
        scrollX: 0
    }
    render() {
        const {
            hasDots, dotsColor, hasTint, hasPaging, align, alignItem,
            separatorWidth, intervalWidth, data, renderItem
        } = this.props
        const position = Animated.divide(this.state.scrollX, intervalWidth)
        const handleScroll = (e) => {
            const { contentOffset } = e.nativeEvent
            // console.log('nativeEvent ', e.nativeEvent)
            this.setState({ scrollX: contentOffset.x })
        }
        return (
            <View align={align}>
                <FlatList
                    horizontal
                    scrollEnabled
                    decelerationRate={hasPaging ? 0 : 'fast' }
                    pagingEnabled={Platform.OS === 'android' && hasPaging} // Paging on android
                    snapToInterval={intervalWidth} // Paging on iOS
                    snapToAlignment={alignItem}
                    style={ hasTint ? [styles.containerShadow] : null }
                    data={data}
                    renderItem={renderItem}
                    onScroll={handleScroll}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => (<Separator width={separatorWidth} />)}
                    keyExtractor={(item, index) => index.toString()}
                />
                { hasDots && data.length > 1 &&
                    <View>
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
                                        style={[{ opacity }, styles.dotsWrapper, dotsColorStyles[dotsColor]]}
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

