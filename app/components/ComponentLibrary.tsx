import { ViewStyle, Text } from 'react-native'
import React from 'react'
import { Spacing, Colors, Shadows } from '../constants'
import DOGS_JSON from '../../assets/dogs.json'

const dogs = DOGS_JSON
const dog = dogs[0]

export function ComponentLibrary() {
  //
  // TASK: Implement the `<ComponentLibrary>` component
  //
  return <Text>FavoritesToggle</Text>
}

const $scrollView: ViewStyle = {
  padding: Spacing.large,
}

const $component: ViewStyle = {
  margin: Spacing.small,
  display: 'flex',
  flexDirection: 'column',
  marginLeft: Spacing.large,
  marginBottom: Spacing.large,
  ...Shadows.card,
}

const border: ViewStyle = {
  borderColor: 'black',
  borderWidth: 1,
  padding: Spacing.small,
  margin: Spacing.small,
  backgroundColor: Colors.background,
}

const $divider: ViewStyle = {
  width: '100%',
  height: 4,
  backgroundColor: Colors.border,
  marginBottom: Spacing.small,
}

const $row: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  ...border,
  ...Shadows.card,
}
