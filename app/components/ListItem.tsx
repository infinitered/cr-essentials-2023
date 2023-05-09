import React from 'react'
import { Pressable, View, ViewStyle } from 'react-native'

import { Dog } from '../services/types'

import { Colors, Spacing } from '../constants'

import { Text } from './Text'
import { Image } from './Image'
import { FavoriteIcon } from './FavoriteIcon'

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
  const toggleFavorite = React.useCallback(() => {
    setFavorite(id, !isFavorite)
  }, [setFavorite, isFavorite])

  return (
    <Pressable
      onPress={() => console.log(`${name} is a good dog!`)}
      style={({ pressed }) => [
        $itemContents,
        {
          backgroundColor: pressed ? Colors.tint : Colors.background,
        },
      ]}
    >
      <View style={$itemLeft}>
        <Image preset="avatar-small" source={avatar} />
      </View>
      <View style={$itemRight}>
        <View style={$titleAndDescription}>
          <View style={$title}>
            <Text preset={'listItemTitle'}>{name}</Text>
            <View>
              <Text preset={'caption'}>{rating}/10</Text>
            </View>
          </View>
          <Text preset={'listItemBody'} numberOfLines={2}>
            {description}
          </Text>
        </View>
        <Pressable
          onPress={toggleFavorite}
          style={({ pressed }) => [
            favoriteToggle,
            { backgroundColor: pressed ? Colors.tint : 'transparent' },
          ]}
        >
          <View style={$favoriteIcon}>
            <FavoriteIcon filled={isFavorite} size={24} />
          </View>
        </Pressable>
      </View>
    </Pressable>
  )
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
