import React from 'react'
import { View, type ViewStyle, TextStyle } from 'react-native'
import { FavoritesToggle, Image, Text } from '../components'
import { Colors, Spacing } from '../constants'
import { useDog, useFavorites } from '../hooks'
import DOGS_JSON from '../../assets/dogs.json'

const id = DOGS_JSON[0].id

export function ProfileScreen() {
  const dog = useDog(id)
  const { description, name, photo, avatar, rating } = dog ?? {}

  const { isFavorite, setFavorite } = useFavorites()
  const isDogFavorite = isFavorite(id)

  const updateFavorite = React.useCallback(
    async (value: boolean) => {
      await setFavorite(id, value)
    },
    [setFavorite]
  )

  return (
    <View style={$container}>
      <View style={$bannerContainer}>
        <Image preset="banner" source={photo} contentFit={'cover'} />
        <View style={$scrim} />
        <View style={$avatarContainer}>
          <Image source={avatar} preset={'avatar'} />
        </View>
      </View>
      <View style={$content}>
        <View style={$headerRow}>
          <Text weight="bold" preset="heading" style={$heading}>
            {name}
          </Text>
          <FavoritesToggle
            onChange={updateFavorite}
            size={'large'}
            value={isDogFavorite}
          />
        </View>
        <Text preset={'default'} style={$description}>
          {description}
        </Text>
        <Text>{`Rating: ${rating}/10`}</Text>
        <Text>{`Is this a GOOD dog?: ✅`}</Text>
        <Text>{`Is this one of my favorites?: ${
          isDogFavorite ? '✅' : '❌'
        }`}</Text>
      </View>
    </View>
  )
}

const $headerRow: ViewStyle = {
  flexDirection: `row`,
  alignItems: `center`,
  borderBottomColor: Colors.border,
  borderBottomWidth: 1,
}
const $container: ViewStyle = {
  flex: 1,
}

const $heading: TextStyle = {
  marginRight: Spacing.medium,
}

const $content: ViewStyle = {
  marginTop: 75,
  paddingVertical: Spacing.small,
  paddingHorizontal: Spacing.large,
}

const $description: TextStyle = {
  marginVertical: Spacing.small,
}

const $bannerContainer: ViewStyle = {
  height: '50%',
}
const $scrim: ViewStyle = {}

const $avatarContainer: ViewStyle = {
  position: `relative`,
  top: -75,
  left: Spacing.medium,
  shadowColor: `black`,
  shadowOffset: {
    width: 2,
    height: 2,
  },
  shadowOpacity: 0.3,
}
