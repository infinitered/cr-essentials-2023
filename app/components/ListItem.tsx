import React from 'react'
import { ViewStyle } from 'react-native'

import { Dog } from '../services/types'

import { Colors, Spacing } from '../constants'

import { Text } from './Text'

interface ListItemProps extends Dog {
  isFavorite: boolean
  setFavorite: (dog: string, isFavorite: boolean) => void
}

export const ListItem = ({
  avatar,
  description,
  id,
  name,
  rating,
  isFavorite,
  setFavorite,
}: ListItemProps) => {
  //
  // TASK: Implement the ListItem component to display information about a Dog
  //
  return <Text>ListItem</Text>
}

const $itemContents: ViewStyle = {
  flexDirection: 'row',
  width: '100%',
  flex: 1,
  borderRadius: Spacing.small,
  marginVertical: Spacing.tiny,
  shadowRadius: 1,
  shadowColor: Colors.shadow,
  shadowOpacity: 0.2,
  shadowOffset: {
    width: 1,
    height: 1,
  },
}

const $title: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
}

let showDebugBorder = false
let i = 0
const debugBorder = () => {
  if (!showDebugBorder) return {}
  const borderColors = [
    'magenta',
    'lime',
    'yellow',
    'cyan',
    'blue',
    'orange',
    'red',
  ]
  i = i + 1

  return {
    borderWidth: 1,
    borderColor: borderColors[i % borderColors.length],
  }
}

const $itemLeft: ViewStyle = {
  width: 50,
  justifyContent: 'center',
  alignItems: 'center',
  margin: Spacing.small,
  ...debugBorder(),
}

const $itemRight: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  ...debugBorder(),
}

const $titleAndDescription: ViewStyle = {
  marginVertical: Spacing.tiny,
  flexDirection: 'column',
  alignItems: 'flex-start',
  flex: 1,
  paddingRight: Spacing.small,
  borderRightColor: Colors.border,
  borderRightWidth: 1,
  ...debugBorder(),
}

const favoriteToggle: ViewStyle = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: Spacing.small,
  borderTopRightRadius: Spacing.small,
  borderBottomRightRadius: Spacing.small,
  width: 50,
  ...debugBorder(),
}

const $favoriteIcon: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
}
