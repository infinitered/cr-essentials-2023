import React, { useMemo, useCallback, useLayoutEffect } from 'react'
import { type ViewStyle, View, ListRenderItem } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { type AppStackParamList } from '../../navigators/AppNavigator'
import { Spacing } from '../../constants'
import { ListItem } from './ListItem'
import { Dog } from '../../services/types'
import { Text } from '../../components'
import { useDogs, useFavorites } from '../../hooks'

type NavigationProps = NativeStackScreenProps<AppStackParamList, 'List'>

export function ListScreen(props: NavigationProps) {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: 'Dogs',
    })
  }, [])

  const { dogs } = useDogs()
  const { setFavorite, isFavorite } = useFavorites()

  /**
   * Renders a single item in the flatlist
   */
  const renderItem: ListRenderItem<Dog> = useCallback(({ item }) => {
    //
    // TASK: Implement a render item function that renders a dog's information
    //
    return <Text>ListItem</Text>
  }, [])

  /**
   * Header component displayed at the top of the Flatlist
   */
  const ListHeader = useMemo(() => {
    //
    // TASK: Create a List Header component
    //
    return <Text>ListHeader</Text>
  }, [])

  return (
    <View style={$container}>
      <View style={$listItemContainer}>
        <ListItem
          setFavorite={setFavorite}
          isFavorite={isFavorite(dogs[0].id)}
          {...dogs[0]}
          {...props}
        />
      </View>
    </View>
  )
}

const $listItemContainer: ViewStyle = {
  marginHorizontal: Spacing.medium,
  marginVertical: Spacing.large,
  height: 75,
}

const $listHeader: ViewStyle = {
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  paddingBottom: Spacing.small,
}

const $container: ViewStyle = {
  flex: 1,
}

const $flatListContentContainer: ViewStyle = {
  paddingHorizontal: Spacing.medium,
  paddingBottom: Spacing.large,
}

const $headerComponentStyle: ViewStyle = {
  paddingVertical: Spacing.small,
}
