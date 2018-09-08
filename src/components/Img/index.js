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
        case 'mem0':
            return <Image source={require('./mems/mem0.png')} {...rest} />
        case 'mem1':
            return <Image source={require('./mems/mem1.png')} {...rest} />
        case 'mem2':
            return <Image source={require('./mems/mem2.png')} {...rest} />
        case 'mem3':
            return <Image source={require('./mems/mem3.png')} {...rest} />
        case 'mem4':
            return <Image source={require('./mems/mem4.png')} {...rest} />
        case 'valley0':
            return <Image source={require('./valley/valley0.png')} {...rest} />
        case 'valley1':
            return <Image source={require('./valley/valley1.png')} {...rest} />
        case 'valley2':
            return <Image source={require('./valley/valley2.png')} {...rest} />
        case 'valley3':
            return <Image source={require('./valley/valley3.png')} {...rest} />
        case 'valley4':
            return <Image source={require('./valley/valley4.png')} {...rest} />
        case 'valley5':
            return <Image source={require('./valley/valley5.png')} {...rest} />
        default:
            return null
    }
}

Img.propTypes = {
    category: PropTypes.string,
    name: PropTypes.string,
    isImageBackground: PropTypes.bool
}
