import React from 'react'
import { PressableProps, StyleProp, ViewStyle } from 'react-native'
import { Colors, Spacing } from '../constants'
import { Text } from './Text'

interface IconToggleProps extends PressableProps {
  value: boolean
  OnIcon: () => JSX.Element
  OffIcon: () => JSX.Element
  onChange: (value: boolean) => void
  style?: StyleProp<ViewStyle>
}

export const IconToggle = ({
  value: valueIn,
  OnIcon,
  OffIcon,
  onChange,
  style: $styleProp,
  ...rest
}: IconToggleProps) => {
  //
  // TASK: Implement the IconToggle component
  //
  return <Text>IconToggle</Text>
}

const $button: ViewStyle = {
  borderRadius: Spacing.tiny,
  padding: Spacing.extraSmall,
  minHeight: 40,
  minWidth: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: Colors.tint,
}
