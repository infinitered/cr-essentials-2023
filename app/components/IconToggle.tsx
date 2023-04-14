import React, { useCallback } from 'react'
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native'

import { Colors, Spacing } from '../constants'

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
  const [value, setValue] = React.useState(false)

  React.useEffect(() => {
    if (valueIn !== value) {
      setValue(valueIn)
    }
  }, [value, valueIn])

  const toggle = () => {
    setValue(!value)
    onChange(!value)
  }

  const $buttonStyle = useCallback(
    (state: PressableStateCallbackType) => {
      const backgroundColor = state.pressed
        ? Colors.tabIconDefault
        : 'transparent'

      return [$button, $styleProp, { backgroundColor }] as StyleProp<ViewStyle>
    },
    [$styleProp]
  )
  return (
    <Pressable {...rest} onPress={toggle} style={$buttonStyle}>
      {value ? <OnIcon /> : <OffIcon />}
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
  backgroundColor: Colors.tint,
}
