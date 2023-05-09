import * as React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

export interface IconProps {
  /**
   * The name of the icon
   */
  icon: keyof typeof Ionicons.glyphMap
  /**
   * An optional tint color for the icon
   */
  color?: string
  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number
}

/**
 * A component to render a registered Expo icon.
 *
 * @expo/vector-icons is a library that allows you to use Ionicons and other icon sets from Expo.
 * For more information about @expo/vector-icons see: https://docs.expo.io/versions/latest/guides/icons/
 */
export function Icon(props: IconProps) {
  const { icon, color, size } = props
  return <Ionicons name={icon} size={size} color={color} />
}
