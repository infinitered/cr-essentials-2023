### Chapter 6

# Navigation and Native Libraries

In this chapter, we will be building out a stub `ListScreen` and create a native navigator using the widely populate [`react-navigation](https://reactnavigation.org/).

We will learn:

- how to use native libraries in our application
- how to use the native navigator to navigate between screens
- how to pass data between screens

## Tasks

### Pre-requisites

1. Install [`react-navigation/native`](https://reactnavigation.org/docs/getting-started)
   1. NOTE: don't forget to restart your metro bundler after installing this library

### Tasks for this section

1. [Code-a-long] Set up navigation using React Navigation
   1. Create a `<ListScreen>` screen in `app/screens/ListScreen.tsx`
   2. Create an `AppNavigator` in `app/navigators/AppNavigator.tsx`
      - Use a native-stack navigator that includes `ProfileScreen` and `ListScreen`
   3. Update `app/app.tsx` to use the `AppNavigator` as the root navigator
   4. On `<ListScreen>`, use your `<ListItem>` as a button to navigates to `ProfileScreen`
   5. Add an `id` Route parameter to the `Profile` route, that takes the ID of the dog to display.
   6. Update `<ProfileScreen>` to use the id param to fetch the dog's information
   7. Use `navigation.setOptions` to set the title of the `ListScreen` to "List"
   8. Use `navigation.setOptions` to set the title of the `ProfileScreen` to the name of the dog.
2. Add the `<ComponentLibrary>` as a screen to the navigator (use a temporary button on ListScreen to navigate)
3. Create a `<HeaderIconButton>` component that navigates to the `<ComponentLibrary>`>, and add it to the Navigation bar on `<ListScreen>`
4. Add a `<HeaderIconButton>` to the `<ComponentLibrary>` that navigates back to the `<ListScreen>`

### Options if you finish early

1. Try passing the dog's name in as a param to the `ProfileScreen` and display it in a `Text` component
2. Try adding "next" and "previous" buttons to `ProfileScreen`.
3. There's an extra render caused by the useDog hook that causes a delay in loading the image and information. Can you find it? How would you fix it?
4. Create a [Drawer Navigator](https://reactnavigation.org/docs/drawer-based-navigation) that includes `ProfileScreen` and `ListScreen`

## Resources

### Native Libraries

In the React Native ecosystem, there are a lot of native libraries that can be used to extend the functionality of our application. These libraries can be used to access native device functionality, or to provide a more performant implementation of a component. When searching for a library you must follow the install instructions carefully as some libraries require linking, some require installing pods, and some require nothing at all.

[React Native Directory](https://reactnative.directory/) is a great resource for finding libraries that you may need for your project.

### [`Pressable`](https://reactnative.dev/docs/pressable)

`Pressable` is a component wrapper that can detect press interactions on any of its defined children.

```tsx
<Pressable onPress={onPressFunction}>
  <Text>I'm pressable!</Text>
</Pressable>
```

### [`react-navigation`](https://reactnavigation.org/docs/getting-started)

`react-navigation` is a library that provides a way to navigate between screens in a React Native application. It is a very popular library and has a lot of community support.

Example usage:

```tsx
// app/navigators/AppNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type AppStackParamList = {
  Home: undefined
  Profile: { random: number } // <- this is how we define params
  Settings: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  )
}
```

```tsx
// App.tsx
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigator } from './navigators/AppNavigator'

export const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}
```

### Navigating between screens

To navigate between screens, we need to use the `navigation` prop that is passed to our screen components. This prop contains a `navigate` function that we can use to navigate to a screen.

The easiest way to understand this is to think of a deck of cards. Each card is a screen, and the deck is the stack of screens. When we navigate to a screen, we are pushing a new card onto the top of the deck. When we navigate back, we are "popping" (removing) a card off the top of the deck (and discarding it).

```tsx
// app/screens/HomeScreen.tsx
import { StackNavigationProp } from '@react-navigation/native-stack'
import { AppStackParamList } from '../navigators/AppNavigator'

type HomeScreenProps = StackNavigationProp<AppStackParamList, 'Home'>

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate('Profile', { random: 123 })}
      >
        <Text>Go to profile</Text>
      </Pressable>
    </View>
  )
}
```

```tsx
// app/screens/ProfileScreen.tsx
import { StackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamList } from '../navigators/AppNavigator'

type ProfileScreenProps = StackScreenProps<AppStackParamList, 'Profile'>

export const ProfileScreen = ({ navigation, route }: ProfileScreenProps) => {
  return (
    <View>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Pressable>
      <Text>Random number: {route.params.random}</Text>
    </View>
  )
}
```
