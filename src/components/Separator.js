import React from 'react'
import PropTypes from 'prop-types'

import { g } from 'styles'

import View from 'components/View'

export default function Separator({
    width,
    height,
    ...rest
}) {
    const style = [
        width && { width: g(width) },
        height && { height: g(height) }
    ]
    return (
        <View {...rest} style={style} />
    )
}

Separator.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
}
