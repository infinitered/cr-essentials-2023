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
  //
  // TASK: Implement a custom `<Text>` component
  //
  return <Text>Text</Text>
}

/**
 * Styles that size the text based on the following table:
 * | Size | Font Size | Line Height |
 * |------|-----------|-------------|
 * | xxl  | 36        | 44          |
 * | xl   | 24        | 34          |
 * | lg   | 20        | 32          |
 * | md   | 18        | 26          |
 * | sm   | 16        | 24          |
 * | xs   | 14        | 21          |
 * | xxs  | 12        | 18          |
 */
const $sizeStyles = {
  sm: { fontSize: 16, lineHeight: 24 } as TextStyle, // .. rest of sizes here
}

/**
 * Styles that set the font weight based on the following table:
 * | Weight  | Font Family   |
 * | ------- | ------------- |
 * | Black   | Lato-Black    |
 * | Bold    | Lato-Bold     |
 * | Regular | Lato-Regular  |
 * | Light   | Lato-Light    |
 */
const $fontWeightStyles = {
  regular: { fontFamily: 'Lato-Regular' } as TextStyle, // .. rest of weights here
}

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.regular,
  { color: Colors.text },
]

/**
 * Presets that set the styles based on the following table:
 *
 * | Preset        | Size | Weight |
 * | ------------- | ---- | ------ |
 * | default       | -    | -      |
 * | heading       | xxl  | black  |
 * | subheading    | xxl  | bold   |
 * | formLabel     | -    | bold   |
 * | listHeader    | xl   | black  |
 * | listItemTitle | sm   | bold   |
 * | listItemBody  | xxs  | regular|
 * | caption       | xxs  | bold   |
 *
 * example:
 *   `heading: [$baseStyle, $sizeStyles.xxl, $fontWeightStyles.black],`
 *
 */
const $presets = {
  default: $baseStyle,
}
