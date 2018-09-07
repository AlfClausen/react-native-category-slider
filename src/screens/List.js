import React, { Component } from 'react'

import Text from 'components/Text'
import View from 'components/View'
import Screen from 'components/Screen'

export default class List extends Component {
    render() {
        return (
            <Screen>
                <View isFlexible align="center" justify="center">
                    <Text>TEST</Text>
                </View>
            </Screen>
        )
    }
}
