import { Colors } from './colors'
import { ViewStyle } from 'react-native'

export const Shadows: Record<string, ViewStyle> = {
  card: {
    shadowRadius: 1,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
}
