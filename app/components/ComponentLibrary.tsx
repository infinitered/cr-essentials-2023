import { Text } from './Text'
import { View, ViewStyle, ScrollView } from 'react-native'
import { Image } from './Image'
import React from 'react'
import { Spacing, Colors, Shadows } from '../constants'
import { Icon } from './Icon'
import { Button } from './Button'
import DOGS_JSON from '../../assets/dogs.json'

const dogs = DOGS_JSON
const dog = dogs[0]
export function ComponentLibrary() {
  const [isFavorite, setIsFavorite] = React.useState(false)

  return (
    <ScrollView style={$scrollView}>
      <Text preset={'heading'}>Component Library</Text>
      <View style={$divider} />
      <Text preset={'subheading'}>Image</Text>
      <View style={$component}>
        <Text preset={'default'}>default</Text>
        <Image source={dog.photo} preset={'default'} />
        <Text preset={'default'}>avatar</Text>
        <Image source={dog.photo} preset={'avatar'} />
        <Text preset={'default'}>avatar-small</Text>
        <Image source={dog.photo} preset={'avatar-small'} />
      </View>
      <View style={$divider} />
      <Text preset={'subheading'}>Text</Text>
      <View style={$component}>
        <View style={border}>
          <Text preset={'default'}>default</Text>
          <Text preset={'heading'}>heading</Text>
          <Text preset={'subheading'}>subheading</Text>
          <Text preset={'caption'}>caption</Text>
          <Text preset={'formLabel'}>formLabel</Text>
          <Text preset={'listHeader'}>listHeader</Text>
          <Text preset={'listItemTitle'}>listItemTitle</Text>
          <Text preset={'listItemBody'}>listItemBody</Text>
        </View>
      </View>
      <View style={$divider} />
      <Text preset={'subheading'}>Icon</Text>
      <View style={$component}>
        <Text preset={'default'}>Icon</Text>
        <View style={$row}>
          <Icon icon={'image'} size={44} />
          <Icon icon={'search'} size={44} />
          <Icon icon={'book'} size={44} />
        </View>
        <Text preset={'default'}>Size</Text>
        <View style={$row}>
          <Icon icon={'image'} size={22} />
          <Icon icon={'image'} size={44} />
          <Icon icon={'image'} size={88} />
        </View>
        <Text preset={'default'}>Color</Text>
        <View style={$row}>
          <Icon icon={'image'} size={44} color={'red'} />
          <Icon icon={'image'} size={44} color={'magenta'} />
          <Icon icon={'image'} size={44} color={'lime'} />
        </View>
      </View>
      <View style={$divider} />
      <View style={$divider} />
      <Text preset={'subheading'}>Button</Text>
      <View style={$component}>
        <Button preset={'default'} text={'default'} onPress={() => {}} />
      </View>
    </ScrollView>
  )
}

const $scrollView: ViewStyle = {
  padding: Spacing.large,
}

const $component: ViewStyle = {
  margin: Spacing.small,
  display: 'flex',
  flexDirection: 'column',
  marginLeft: Spacing.large,
  marginBottom: Spacing.large,
  ...Shadows.card,
}

const border: ViewStyle = {
  borderColor: 'black',
  borderWidth: 1,
  padding: Spacing.small,
  margin: Spacing.small,
  backgroundColor: Colors.background,
}

const $divider: ViewStyle = {
  width: '100%',
  height: 4,
  backgroundColor: Colors.border,
  marginBottom: Spacing.small,
}

const $row: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  ...border,
  ...Shadows.card,
}
