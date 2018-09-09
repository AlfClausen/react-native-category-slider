import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet, Animated } from 'react-native'

import View from 'components/View'
import Separator from 'components/Separator'

import { g, colors, screenWidth } from 'styles'

const styles = StyleSheet.create({
    dotsWrapper: {
        height: g(2),
        width: g(2),
        marginHorizontal: 5,
        borderRadius: g(2) / 2,
        backgroundColor: colors.black
    }
})

export default class HorizontalScroll extends Component {
    static propTypes = {
        data: PropTypes.any.isRequired,
        renderItem: PropTypes.any.isRequired,
        align: PropTypes.string, // enum typecheck in View
        hasDots: PropTypes.bool,
        hasTint: PropTypes.bool,
        hasPaging: PropTypes.bool
    }
    static defaultProps = {
        align: 'center',
        hasPaging: false
    }
    state = {
        scrollX: 0,
    }
    render() {
        const {
            hasDots, hasTint, hasPaging, align, data, renderItem
        } = this.props
        const position = Animated.divide(this.state.scrollX, screenWidth)
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
                    pagingEnabled={hasPaging}
                    style={ hasTint ? [styles.containerShadow] : null }
                    data={data}
                    renderItem={renderItem}
                    onScroll={handleScroll}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                />
                { hasDots &&
                    <View align="center">
                        <Separator height={4} />
                        <View flexDir="row">
                            { data.map((_, i) => {
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
                }
            </View>
        )
    }
}

