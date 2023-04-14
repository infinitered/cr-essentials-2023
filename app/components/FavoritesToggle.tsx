import React from 'react'
import { Icon } from './Icon'
import { IconToggle } from './IconToggle'
import { Colors } from '../constants'

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
  const OnIcon = React.useCallback(
    () => <Icon icon={'star'} size={sizes[size]} color={Colors.tintFavorite} />,
    [size]
  )
  const OffIcon = React.useCallback(
    () => (
      <Icon
        icon={'star-outline'}
        size={sizes[size]}
        color={Colors.tintFavorite}
      />
    ),
    [size]
  )

  return (
    <IconToggle
      value={value}
      OnIcon={OnIcon}
      OffIcon={OffIcon}
      onChange={onChange}
    />
  )
}

const sizes: Record<FavoritesToggleProps['size'], number> = {
  small: 18,
  medium: 24,
  large: 32,
}
