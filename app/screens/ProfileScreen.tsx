import React from 'react'
import { type ViewStyle, TextStyle } from 'react-native'
import { Colors, Spacing } from '../constants'
import DOGS_JSON from '../../assets/dogs.json'

const id = DOGS_JSON[0].id

export function ProfileScreen() {
  //
  // TASK: Implement the ProfileScreen
  //      - it should show the dog's name, description, rating, and whether it's a favorite
  //      - user should be able to toggle whether it's a favorite or not
  //      - the banner should cover the top 55% of the screen
  //      - the avatar should be positioned overlapping the banner
  //
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
