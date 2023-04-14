import React from 'react'
import { Image as ExpoImage, ImageProps as ExpoImageProps } from 'expo-image'
import { ImageStyle } from 'react-native'

type Presets = keyof typeof $presets

interface ImageProps extends ExpoImageProps {
  preset?: Presets
  source: string
}

export const Image = ({
  preset,
  source,
  style: $style,
  ...rest
}: ImageProps) => {
  return (
    <ExpoImage
      {...rest}
      source={source}
      style={[$presets[preset ?? 'default']]}
    />
  )
}

const $presets = {
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: 'white',
  } as ImageStyle,
  'avatar-small': {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  banner: {
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
  } as ImageStyle,
  default: {
    height: 200,
    width: 200,
  } as ImageStyle,
} as const
