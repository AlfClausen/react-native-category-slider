import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { g } from 'styles'

import View from 'components/View'
import Text from 'components/Text'
import Touch from 'components/Touch'

export default function TabItem({ title, currentTab, tabId, onPress }) {
    return (
        <Touch disabled={currentTab === tabId} onPress={() => onPress(tabId)}>
            <Text
                size="title3"
                color={currentTab === tabId ? 'white' : 'inactive'}
                style={{ paddingHorizontal: g(4), paddingBottom: g(2) }}
            >
                {title}
            </Text>
        </Touch>
    )
}

TabItem.propTypes = {
    title: PropTypes.string.isRequired,
    currentTab: PropTypes.string.isRequired,
    tabId: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}
