import * as React from 'react'
import { Icon, IconProps } from './Icon'
import { Colors } from '../constants'

type IconFavProps = Omit<IconProps, 'icon'>

interface FavProps extends IconFavProps {
  /**
   * to favorite the icon
   */
  filled: boolean
}

export function FavoriteIcon(props: FavProps) {
  const { filled } = props
  return (
    <Icon
      {...props}
      icon={filled ? 'star' : 'star-outline'}
      color={Colors.tintFavorite}
    />
  )
}
