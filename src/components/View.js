import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View as ReactNativeView, ViewPropTypes, StyleSheet } from 'react-native'

import { g, colors } from 'styles'

const styles = StyleSheet.create({
    hasMarginHorizontal: { marginHorizontal: g(4) },
    isFlexible: { flex: 1 }
})

const borderRadiusStyles = StyleSheet.create({
    none: { borderRadius: 0 },
    medium: { borderRadius: 9 },
    large: { borderRadius: 15 },
    full: { borderRadius: 500 }
})

const directionStyles = StyleSheet.create({
    column: { flexDirection: 'column' },
    row: { flexDirection: 'row' }
})

const alignStyles = StyleSheet.create({
    start: { alignItems: 'flex-start' },
    center: { alignItems: 'center' }
})
const justifyStyles = StyleSheet.create({
    start: { justifyContent: 'flex-start' },
    center: { justifyContent: 'center' },
})
const bgColorStyles = StyleSheet.create({
    white: { backgroundColor: colors.white },
    black: { backgroundColor: colors.black },
    transparent: { backgroundColor: colors.transparent }
})

export default class View extends Component {
  static propTypes = {
      hasMarginHorizontal: PropTypes.bool,
      isFlexible: PropTypes.bool,
      flexDir: PropTypes.oneOf(['row', 'column']),
      align: PropTypes.oneOf(['start', 'center']),
      justify: PropTypes.oneOf(['start', 'center']),
      bgColor: PropTypes.oneOf(['white', 'black', 'transparent']),
      borderRadius: PropTypes.oneOf(['none', 'medium', 'large', 'full']),
      style: ViewPropTypes.style
  }

  static defaultProps = {
      hasMarginHorizontal: false,
      isFlexible: false,
      bgColor: 'transparent',
      borderRadius: 'none'
  }
  setNativeProps = (nativeProps) => {
      this._root.setNativeProps(nativeProps);
  }
  render() {
      const {
          hasMarginHorizontal,
          isFlexible,
          flexDir,
          align,
          justify,
          bgColor,
          borderRadius,
          style,
          ...rest
      } = this.props
      const props = {
          style: [
              hasMarginHorizontal && styles.hasMarginHorizontal,
              isFlexible && styles.isFlexible,
              directionStyles[flexDir],
              alignStyles[align],
              justifyStyles[justify],
              bgColorStyles[bgColor],
              borderRadiusStyles[borderRadius],
              style
          ],
          ref: (view) => {
              this._root = view
          },
          ...rest
      }
      return <ReactNativeView {...props} />
  }
}
