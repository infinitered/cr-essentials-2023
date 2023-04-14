import React from 'react'
import { Text, Image, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context'

const CHAIN_REACT_LOGO: any = require('../assets/chain-react-logo.jpeg')
const App = () => {
  const [fontsLoaded] = useFonts({
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar style="auto" />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 20,
          flex: 1,
        }}
      >
        <Image
          source={CHAIN_REACT_LOGO}
          style={{
            width: 200,
            height: 200,
            margin: 20,
          }}
        />
        <Text
          style={{
            fontFamily: 'Lato-Light',
            fontSize: 24,
            textAlign: 'center',
          }}
        >
          Chain React 2023
        </Text>

        <Text
          style={{
            fontFamily: 'Lato-Black',
            fontSize: 36,
            textAlign: 'center',
            margin: 20,
          }}
        >
          React Native Essentials
        </Text>

        <Text style={{ fontFamily: 'Lato-Regular' }}>
          Congratulations! It's working!
        </Text>
      </View>
    </SafeAreaProvider>
  )
}

export default App
