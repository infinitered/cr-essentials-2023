import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context'
import { AppNavigator } from './navigators/AppNavigator'

const App = () => {
  const [fontsLoaded] = useFonts({
    "Lato-Bold": require('../assets/fonts/Lato-Bold.ttf'),
    "Lato-Black": require('../assets/fonts/Lato-Black.ttf'),
    "Lato-Regular": require('../assets/fonts/Lato-Regular.ttf'),
    "Lato-Light": require('../assets/fonts/Lato-Light.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar style="auto" />
      <AppNavigator />
    </SafeAreaProvider>
  )
}

export default App
