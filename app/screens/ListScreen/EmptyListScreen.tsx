import React from 'react'
import { View, ViewStyle } from 'react-native'

import { Text } from '../../components'

export const EmptyListScreen = () => (
  <View style={$emptyListContainer}>
    <Text preset="subheading">No dogs found</Text>
  </View>
)

const $emptyListContainer: ViewStyle = {
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
}
