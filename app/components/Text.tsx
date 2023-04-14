import React from 'react'
import {
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native'

import { Colors } from '../constants'

type Sizes = keyof typeof $sizeStyles
type Weights = keyof typeof $fontWeightStyles
type Presets = keyof typeof $presets

export interface TextProps extends RNTextProps {
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>
  /**
   * One of the different types of text presets.
   */
  preset?: Presets
  /**
   * Text weight modifier.
   */
  weight?: Weights
  /**
   * Text size modifier.
   */
  size?: Sizes
  /**
   * Children components.
   */
  children?: React.ReactNode
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Text.md)
 */
export function Text(props: TextProps) {
  const { weight, size, text, children, style: $styleOverride, ...rest } = props

  const content = text || children

  const preset: Presets = $presets[props.preset] ? props.preset : 'default'
  const $styles = [
    $presets[preset],
    $fontWeightStyles[weight],
    $sizeStyles[size],
    $styleOverride,
  ]

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  )
}

const $sizeStyles = {
  xxl: { fontSize: 36, lineHeight: 44 } as TextStyle,
  xl: { fontSize: 24, lineHeight: 34 } as TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } as TextStyle,
  md: { fontSize: 18, lineHeight: 26 } as TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } as TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } as TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } as TextStyle,
}

const $fontWeightStyles = {
  black: { fontFamily: 'Lato-Black' } as TextStyle,
  bold: { fontFamily: 'Lato-Bold' } as TextStyle,
  regular: { fontFamily: 'Lato-Regular' } as TextStyle,
  light: { fontFamily: 'Lato-Light' } as TextStyle,
}

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.regular,
  { color: Colors.text },
]

const $presets = {
  default: $baseStyle,

  heading: [$baseStyle, $sizeStyles.xxl, $fontWeightStyles.black],
  subheading: [
    $baseStyle,
    $sizeStyles.xxl,
    $fontWeightStyles.bold,
  ] as StyleProp<TextStyle>,

  formLabel: [$baseStyle, $fontWeightStyles.bold] as StyleProp<TextStyle>,

  listHeader: [$baseStyle, $sizeStyles.xl, $fontWeightStyles.black],
  listItemTitle: [$baseStyle, $sizeStyles.sm, $fontWeightStyles.bold],
  listItemBody: [$baseStyle, $fontWeightStyles.regular, $sizeStyles.xxs],

  caption: [$baseStyle, $fontWeightStyles.bold, $sizeStyles.xxs],
}
