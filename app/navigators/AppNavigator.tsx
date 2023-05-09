import React from 'react'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigationProp,
} from '@react-navigation/native'
import { useColorScheme, Pressable } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackScreenProps } from '@react-navigation/stack'
import { ListScreen, ProfileScreen } from '../screens'
import { ComponentLibrary } from '../components/ComponentLibrary'
import { Icon, IconProps } from '../components'
import { Colors } from '../constants'

export type AppStackParamList = {
  List: undefined
  Profile: { id: string }
  ComponentLibrary: undefined
}

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, T>

const Stack = createNativeStackNavigator<AppStackParamList>()

interface HeaderIconButtonProps {
  onPress: () => void
  icon: IconProps['icon']
}
const HeaderIconButton = ({ onPress, icon }: HeaderIconButtonProps) => (
  <Pressable onPress={onPress}>
    <Icon icon={icon} color={Colors.tint} size={22} />
  </Pressable>
)

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={({ navigation }) => ({
          headerRight() {
            return (
              <HeaderIconButton
                onPress={() => navigation.navigate('ComponentLibrary')}
                icon="code-slash"
              />
            )
          },
        })}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="ComponentLibrary"
        component={ComponentLibrary}
        options={({ navigation }) => ({
          presentation: 'modal',
          headerTitle: 'Component Library',
          headerRight() {
            return (
              <HeaderIconButton
                onPress={() => navigation.goBack()}
                icon="close"
              />
            )
          },
        })}
      />
    </Stack.Navigator>
  )
}

export const AppNavigator = () => {
  const colorScheme = useColorScheme()

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <AppStack />
    </NavigationContainer>
  )
}
