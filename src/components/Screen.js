import React from 'react'
import PropTypes from 'prop-types'

import View from 'components/View'

export default function Screen({
    header,
    bgColor = 'white',
    children,
}) {
    return (
        <View isFlexible bgColor={bgColor}>
            {header}
            <View isFlexible>{children}</View>
        </View>
    )
}

Screen.propTypes = {
    header: PropTypes.element,
    bgColor: PropTypes.string,
    children: PropTypes.node.isRequired,
}
