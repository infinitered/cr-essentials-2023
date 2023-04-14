### Chapter 5

# Building Screens

In this chapter, we will be building out the profile screen for our application (in a future chapter we'll build out the list screen that will bring us here). We will be using the components we created in the previous chapter to build out the screens while learning other concepts.

## Tasks

### Tasks for this section

1. [Code-a-long] Create a `ProfileScreen` (`app/screens/ProfileScreen.tsx`) using the components we made in the previous
   chapter.
   1. Make the "banner image" 55% of the screen width and automatically scale for its height.
   2. Display the different text items using our `app/components/Text` component.
   3. Display the Avatar using our `app/components/Avatar` component.
   4. Make sure to handle the "top" and "bottom" safe areas.

### Options if you finish early

1. Update the background color of the `ProfileScreen` and see how it affects the `StatusBar`.
   1. Update the `StatusBar` to use a different color to be visible on a darker background.

## Resources

### [Safe Area View](https://github.com/th3rdwave/react-native-safe-area-context)

Despite having a [React Native counterpart](https://reactnative.dev/docs/safeareaview), we recommend using this third-party library to handle safe areas on iOS and Android (and web). Safe edges refer to the area of the screen that is not covered by the device's hardware, such as the notch on the iPhone X.

### [useWindowDimensions](https://reactnative.dev/docs/usewindowdimensions)

`useWindowDimensions` automatically updates all of its values when screen size or font scale changes. You can get your application window's `width` and `height`.
