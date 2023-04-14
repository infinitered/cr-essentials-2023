import React, { forwardRef, Ref, useImperativeHandle, useRef } from 'react'
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

import { Colors, Spacing } from '../constants'

import { Text, TextProps } from './Text'

export interface TextFieldProps extends Omit<TextInputProps, 'ref'> {
  /**
   * The label text to display if not using `labelTx`.
   */
  label?: TextProps['text']
  /**
   * Pass any additional props directly to the label Text component.
   */
  LabelTextProps?: TextProps
  /**
   * The placeholder text to display if not using `placeholderTx`.
   */
  placeholder?: TextProps['text']
  /**
   * Optional input style override.
   */
  style?: StyleProp<TextStyle>
  /**
   * Style overrides for the container
   */
  containerStyle?: StyleProp<ViewStyle>
  /**
   * Style overrides for the input wrapper
   */
  inputWrapperStyle?: StyleProp<ViewStyle>
}

/**
 * A component that allows for the entering and editing of text.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-TextField.md)
 */
export const TextField = forwardRef(function TextField(
  props: TextFieldProps,
  ref: Ref<TextInput>
) {
  const {
    label,
    placeholder,
    LabelTextProps,
    style: $inputStyleOverride,
    containerStyle: $containerStyleOverride,
    inputWrapperStyle: $inputWrapperStyleOverride,
    ...TextInputProps
  } = props
  const input = useRef<TextInput>()

  const disabled = TextInputProps.editable === false

  const $containerStyles = [$containerStyleOverride]

  const $labelStyles = [$labelStyle, LabelTextProps?.style]

  const $inputWrapperStyles = [
    $inputWrapperStyle,
    TextInputProps.multiline && { minHeight: 112 },
    $inputWrapperStyleOverride,
  ]

  const $inputStyles = [
    $inputStyle,
    disabled && { color: Colors.tint },
    TextInputProps.multiline && { height: 'auto' },
    $inputStyleOverride,
  ]

  function focusInput() {
    if (disabled) return

    input.current?.focus()
  }

  useImperativeHandle(ref, () => input.current)

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={$containerStyles}
      onPress={focusInput}
      accessibilityState={{ disabled }}
    >
      {!!label && (
        <Text
          preset="formLabel"
          text={label}
          {...LabelTextProps}
          style={$labelStyles}
        />
      )}

      <View style={$inputWrapperStyles}>
        <TextInput
          ref={input}
          underlineColorAndroid={'transparent'}
          textAlignVertical="top"
          placeholder={placeholder}
          placeholderTextColor={Colors.placeholder}
          {...TextInputProps}
          editable={!disabled}
          style={$inputStyles}
        />
      </View>
    </TouchableOpacity>
  )
})

const $labelStyle: TextStyle = {
  marginBottom: Spacing.extraSmall,
}

const $inputWrapperStyle: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'flex-start',
  borderWidth: 1,
  borderRadius: 4,
  overflow: 'hidden',
}

const $inputStyle: TextStyle = {
  flex: 1,
  alignSelf: 'stretch',
  fontSize: 16,
  height: 24,
  // https://github.com/facebook/react-native/issues/21720#issuecomment-532642093
  paddingVertical: 0,
  paddingHorizontal: 0,
  marginVertical: Spacing.extraSmall,
  marginHorizontal: Spacing.small,
}
