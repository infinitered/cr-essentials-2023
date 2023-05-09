import React from 'react'
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  ViewStyle,
  TextStyle,
} from 'react-native'

import { Text } from './Text'

import { Colors, Spacing } from '../constants'

interface ButtonProps extends PressableProps {
  text: string
  preset?: keyof typeof presets
}

export const Button = ({ onPress, text, preset = 'default' }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }: PressableStateCallbackType) => [
        presets[preset],
        { backgroundColor: pressed ? Colors.tabIconDefault : Colors.tint },
      ]}
    >
      <Text text={text} style={$text} />
    </Pressable>
  )
}

const $button: ViewStyle = {
  borderRadius: Spacing.tiny,
  padding: Spacing.extraSmall,
  minHeight: 40,
  minWidth: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const $text: TextStyle = {
  color: Colors.textLight,
}

const presets = {
  default: $button,
}
