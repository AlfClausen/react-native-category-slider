import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

export default function Img({ name, ...rest }) {
    switch (name) {
        case 'cat0':
            return <Image source={require('./cats/cat0.png')} {...rest} />
        case 'cat1':
            return <Image source={require('./cats/cat1.png')} {...rest} />
        case 'cat2':
            return <Image source={require('./cats/cat2.png')} {...rest} />
        case 'cat3':
            return <Image source={require('./cats/cat3.png')} {...rest} />
        case 'cat4':
            return <Image source={require('./cats/cat4.png')} {...rest} />
        case 'cat5':
            return <Image source={require('./cats/cat5.png')} {...rest} />
        case 'cat6':
            return <Image source={require('./cats/cat6.png')} {...rest} />
        case 'cat7':
            return <Image source={require('./cats/cat7.png')} {...rest} />
        case 'cat8':
            return <Image source={require('./cats/cat8.png')} {...rest} />
        default:
            return null
    }
}

Img.propTypes = {
    category: PropTypes.string,
    name: PropTypes.string,
    isImageBackground: PropTypes.bool
}
