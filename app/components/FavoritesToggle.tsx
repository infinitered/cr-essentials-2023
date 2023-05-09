import React from 'react'
import { Text } from './Text'

interface FavoritesToggleProps {
  onChange: (value: boolean) => void
  size: 'small' | 'medium' | 'large'
  value: boolean
}
export function FavoritesToggle({
  size,
  onChange,
  value,
}: FavoritesToggleProps) {
  //
  // TASK: Implement the FavoritesToggle component using IconToggle as a base
  //
  return <Text>FavoritesToggle</Text>
}

const sizes: Record<FavoritesToggleProps['size'], number> = {
  small: 18,
  medium: 24,
  large: 32,
}
