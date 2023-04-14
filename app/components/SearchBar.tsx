import { View, ViewStyle } from 'react-native'
import { TextField } from './TextField'
import { FavoritesToggle } from './FavoritesToggle'
import { Spacing, Colors } from '../constants'

interface SearchBarProps {
  searchDogs: (text: string) => void
  favoritesOnly: boolean
  setFavoritesOnly: (value: boolean) => void
}

export function SearchBar({
  searchDogs,
  favoritesOnly,
  setFavoritesOnly,
}: SearchBarProps) {
  return (
    <View style={$searchBar}>
      <TextField
        containerStyle={$textFieldContainerStyle}
        onChangeText={searchDogs}
        placeholder="Search by name..."
        defaultValue=""
        clearButtonMode={'while-editing'}
      />
      <FavoritesToggle
        value={favoritesOnly}
        onChange={setFavoritesOnly}
        size={'medium'}
      />
    </View>
  )
}

const $searchBar: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: Spacing.large,
  paddingVertical: Spacing.small,
  backgroundColor: Colors.backgroundSecondary,
  shadowColor: Colors.shadow,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  zIndex: 10,
  elevation: 2,
}

const $textFieldContainerStyle: ViewStyle = {
  flex: 1,
  marginEnd: Spacing.extraSmall,
  backgroundColor: 'white',
  borderRadius: 5,
}
