import React, {
  useMemo,
  useCallback,
  useState,
  useEffect,
  useLayoutEffect,
} from 'react'
import { type ViewStyle, FlatList, View, ListRenderItem } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { type AppStackParamList } from '../../navigators/AppNavigator'

import { LoadingIndicator, SearchBar } from '../../components'

import { Spacing } from '../../constants'
import { ListItem } from './ListItem'
import { Dog } from '../../services/types'
import { EmptyListScreen } from './EmptyListScreen'
import { useIsFocused } from '@react-navigation/native'
import { Text } from '../../components'
import { useDogs, useFavorites } from '../../hooks'

type NavigationProps = NativeStackScreenProps<AppStackParamList, 'List'>

export function ListScreen(props: NavigationProps) {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: 'Dogs',
    })
  }, [])

  const {
    dogs,
    isLoading: isDogsLoading,
    fetchNextPage,
    searchDogs,
  } = useDogs()

  const [favoritesOnly, setFavoritesOnly] = useState(false)

  const isFocused = useIsFocused()

  const { favorites, setFavorite, isFavorite, getFavorites } = useFavorites()

  // fetch the favorites when the screen is focused
  useEffect(() => {
    getFavorites()
  }, [isFocused, getFavorites])

  const displayDogs = useMemo(
    () =>
      favoritesOnly ? dogs.filter((dog) => favorites.includes(dog.id)) : dogs,
    [favorites, favoritesOnly, dogs]
  )

  /**
   * Renders a single item in the flatlist
   */
  const renderItem: ListRenderItem<Dog> = useCallback(
    ({ item, index }) => (
      <ListItem
        {...item}
        {...props}
        key={item.id}
        isFavorite={isFavorite(item.id)}
        setFavorite={(isFavorite: boolean) => setFavorite(item.id, isFavorite)}
      />
    ),
    [isFavorite, setFavorite]
  )

  /**
   * Header component displayed at the top of the Flatlist
   */
  const ListHeader = useMemo(
    () => (
      <View style={$listHeader}>
        <Text preset={'listHeader'}>
          {favoritesOnly ? 'Favorite Dogs' : 'Dogs'}
        </Text>
      </View>
    ),
    [favoritesOnly]
  )

  return (
    <View style={$container}>
      <SearchBar
        searchDogs={searchDogs}
        favoritesOnly={favoritesOnly}
        setFavoritesOnly={setFavoritesOnly}
      />
      {isDogsLoading ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          ListHeaderComponent={ListHeader}
          ListHeaderComponentStyle={$headerComponentStyle}
          ListEmptyComponent={<EmptyListScreen />}
          contentContainerStyle={$flatListContentContainer}
          data={displayDogs}
          keyExtractor={(item, index) => `${index}-${item.id}-${item.name}`}
          renderItem={renderItem}
          onEndReachedThreshold={1}
          onEndReached={fetchNextPage}
          decelerationRate={'normal'}
        />
      )}
    </View>
  )
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
