import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'

export default function Touch({ children, ...rest }) {
    return (
        <TouchableOpacity delayPressIn={100} {...rest}>
            {children}
        </TouchableOpacity>
    )
}

Touch.propTypes = {
    children: PropTypes.node.isRequired
}
