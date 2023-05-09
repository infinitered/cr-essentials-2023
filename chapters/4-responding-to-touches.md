### Chapter 4

# Responding to Touches

In this chapter, we will learn how to create interactive components in React Native by:

1. Responding to touch events using the `<Pressable>` component
2. Providing visual feedback to users when they interact with a button
3. Incorporating icons in our app using the `@expo/vector-icons` library
4. Creating reusable components with typed props

## Tasks

### Pre-requisites

1. Add `@expo/vector-icons` to the project
   > `yarn add @expo/vector-icons`


### Tasks for this section

1. [Code-a-long] Create an "IconToggle" component
   - It should take `OnIcon` and `OffIcon` components as props (to be shown when the toggle is on or off)
   - Use a `Pressable` with "pressed" and "unpressed" styles
   - Take an onChange prop which is called with the new state when the button is toggled
2. Create a `FavoritesToggle` component which displays a filled star when selected and an outline star when not selected
3. Create a `<ListItem>` component that displays information about a dog.
   a. wrap the `<ListItem>` in a `Pressable` and have it log the dogs ID when pressed

### Options if you finish early

1. Experiment with interactions using other event handlers on `Pressable`
    - Can you create a button that "charges up" while you hold it?
    - Can you create a button that "bounces" after you let go?

## Resources

## `@expo/vector-icons`

This is a [really useful library](https://docs.expo.dev/guides/icons/) that lets you use several popular open-source
icon libraries in react-native. They're vectors, which means they can scale infinitely without getting pixelated.

You can browse all the available icons at [icons.expo.fyi](https://icons.expo.fyi/).

You can use them like this

```tsx
import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

export function MyIconComponent() {
  return (
      <View style={styles.container}>
        // Get the `name` prop from icons.expo.fyi
        <Ionicons name="md-checkmark-circle" size={32} color="green"/>
      </View>
  )
}
```

### `<Pressable>`

In HTML there is the `<button>` tag, or `<div>` tags with `onClick` properties.

In React Native, we use `<Pressable>`.

From [the docs](https://reactnative.dev/docs/pressable):

> Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined
> children.

So if you have something like this:

```tsx
const MyWeirdButton = () => (
    <Pressable>
      <View>
        <Text>View A</Text>
      </View>
      <View>
        <Text>View B</Text>
      </View>
    </Pressable>
)
```

The Pressable will respond to touches on either view.

### Responding to events

```tsx
import { Pressable } from 'react-native';

<Pressable
    // ... other props
    onPressIn={() => {}}    // called when the user first presses

    onPressOut{() => {}}    // called when the user stops pressing

    onLongPress{() => {}}   // called once after the user has held the button for 500ms

    onPress{() => {}}       // called if the user touches the button and then lifts
                            // their finger before 500ms has passed
/>
```

Most of the time you'll only need `onPress` and `onLongPress`, but it's good to know the others are there in case you
need them.

### Pressed States

It's important to remember that users are touching a flat, glass screen that provides no tactile feedback. So when
making mobile apps, it's essential to provide them with visual feedback on what's happening, so they know their touches
are working.

To help with that, the `style` prop of `Pressable` can take a function that returns different styles depending on
whether the button is pressed or not:

```tsx
import { ViewStyle } from 'react-native'

function MyPressableWithStates() {
  const handlePress = React.useCallback(() => console.log('Ouch!'), [])
  return (
      <Pressable
          onPress={handlePress}
          // the function is called with a boolean that will be `true` when pressed and false when not
          style={(pressed: boolean) => pressed ? $pressedButton : $unpressedButton}
      >
        <Text>Press Me!</Text>
      </Pressable>
  )
}


// Normal background when button is not pressed
const $unpressedButton: ViewStyle = {
  width: 100,
  height: 20,
  backgroundColor: '#ff5500',
}

// background darkens when button is pressed
const $pressedButton: ViewStyle = {
  ...$unpressedButton,
  backgroundColor: '#cc4400',
}
```

### `<TouchableOpacity>`, `<TouchableHighlight>`, `<TouchableWithoutFeedback>`, `<TouchableNativeFeedback>`

The `Touchable` components work a lot like `<Pressable>`, but it's more difficult to style them, and their APIs are a
little less usable. In general, they are a lot more work to use, and so they're not recommended.

`Pressable` has a more extensive and usable API, and it's the recommended component for responding to touch events.

## Typing Components and Props

There are some useful, but hard to find types that you may want to use when building reusable react / react native
components.

### React.ReactElement

React.ReactElement is a type that means "Any component"

```tsx
import { ViewStyle } from 'react-native'

interface BorderWrapperProps {
  component: React.ReactElement // we can take a component as a prop
}

function BorderWrapper(props: BorderWrapperProps) {
  return <View style={$heavyBorder}>{props.component}</View>
}

const $heavyBorder: ViewStyle = {borderWidth: 10, borderStyle: 'solid'}
```

Then we can use it like this:

```tsx
<View>
  <BorderWrapper component={SomeComponent}/>
</View>
```

### Using `PropsWithChildren<T>`

While the code above works just fine, we may want to pass it multiple children, instead of just one, and still have them
wrapped in a border.

And rather than passing them as a prop, we might want to pass them as children like this:

```tsx
<BorderWrapper borderWidth={10} borderColor={'magenta'}>
  <SomeComponent/>
  <SomeOtherComponent/>
</BorderWrapper>
```
