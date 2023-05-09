### Chapter 3

# Making stuff look good

In this chapter, we will be working on how to make our app stylish to follow the World's top fashion trend for 2023.

## Tasks

In this section, we will cover:

### Pre-requisites

There are no new libraries or programs to install for this chapter.

### Tasks for this section

1. [Code-a-long] Create custom Image and Text components
   - Create an `<Image>` component
   - Add the `<ComponentLibrary>` to the `<App>` component`
   - Add the `<Image>` component to the `<ComponentLibrary>`
2. Create a custom `<Text>` component
3. Add the `<Text>` component to the `<ComponentLibrary>`

### Options if you finish early

1. Try to add a custom theme to your app that could include set colors, fonts, and spacing

## Resources

### 1. Differences between React and React Native

In React Native, we don't have HTML tags because it renders to Native components. Instead, we use the `<View>` component and wrap all text in a `<Text>` component. CSS in React Native is similar to CSS, but everything is in `camelCase`. React Native has some "extras" like `paddingVertical`, `paddingHorizontal`, `marginVertical`, and `marginHorizontal`.

#### StyleProp types: `<ViewStyle>`, `<ImageStyle>`, `<TextStyle>`

When doing styles, the types `<ViewStyle>`, `<ImageStyle>`, and `<TextStyle>` are exported from `react-native` and are very helpful because they give intellisense completions for all your styles.

#### Can Styles Be Slow?

Styles are often the cause of unnecessary re-renders, which leads to poor performance. For example, in the following code, the style object is a different object on every render, causing the `Text` component to re-render every time:

```tsx
function Greeting(name:string) {
 
  // this will be different
  const greetingStyle: ViewStyle = {color:"red"}
 
  return (
      <Text style={greetingStyle}>Hello {name}!</Text>
  )}
``` 

To fix this, we can declare our styles outside of the function body, so the prop receives the same object every time:

```tsx
function Greeting(name:string) {
 
  return (
      <Text style={greetingStyle}>Hello {name}!</Text>
  )}

const greetingStyle: ViewStyle = {color: "red"}
```

If we need the styles to be calculated from the props, we can use `React.useMemo()` to ensure the object only changes when the props change:

```tsx
function Greeting(name:string) {
 
  // This will return the same object every time, unless `name` changes.
  const greetingStyle: ViewStyle = React.useMemo(()=>{
    const color = name === "Trevor"? "orange" : "red";
    return {color}
    }, [name])
  
  return (
      <Text style={greetingStyle}>Hello {name}!</Text>
  )}
```

### 2. Using the inspector

The React-Native inspector is a useful tool for examining how styles are applied in your app. To use it, follow these steps:

1. On an iOS Simulator or Android Emulator, shake the device or press CMD+D or CMD+M, respectively.
2. Select "Show Element Inspector" from the menu that appears.
3. Tap on any element in your app to inspect it.

#### Parts of the Inspector:

1. The parents of the selected component are listed. You can select any of these names to inspect that component instead.
2. The styles applied to the selected component are listed.
3. The box-spacing model of the component (including margins, padding, etc.) is displayed.
4. Other tabs provide access to additional inspection and profiling tools.

### 3. Creating Custom Components

React Native components are the building blocks of any application and are reusable and composable. While React Native provides a set of core components that are available out of the box (such as `View`, `Text`, and `Image`), you can also create your own custom components. In this section, we will create a custom component to display an Avatar.

Components may have their own properties and state, and they can interact with each other to build complex user interfaces.

#### How to identify the need for a custom component
When building an app, there may be cases where you need to reuse a specific piece of functionality or design across multiple screens. This is where custom components come in handy. Custom components can also be created to encapsulate specific functionality and design, making it easier to reuse across multiple screens and reducing the amount of code duplication.

#### How to create a custom component
To create a custom component in React Native, you need to write a function that takes props as an argument and returns the UI for the component, which will allow you to customize its behavior and appearance.

Here is an example of creating a custom component in TypeScript:

```tsx
import React from 'react';
import { View, Text, ViewStyle } from 'react-native';

type AvatarProps = {
  name: string;
  size: number;
}

const Avatar = ({ name, size }: AvatarProps) => {
  return (
    <View style={{ width: size, height: size, borderRadius: size / 2 }}>
      <Text>{name}</Text>
    </View>
  );
};

export default Avatar;
```


#### How to style custom components
Passing a style prop to the component is a common way to style it. Writing inline styles is not recommended as it can be difficult to maintain and reuse. Instead, you can define your styles separately and pass them as a prop.

Here is an example of creating a custom component with a style prop in TypeScript:

```tsx
import React from 'react';
import { View, Text, ViewStyle } from 'react-native';

type AvatarProps = {
  name: string;
  size: number;
  avatarStyle?: ViewStyle;
}

const Avatar = ({ name, size, avatarStyle }: AvatarProps) => {
  return (
    <View style={[{ width: size, height: size, borderRadius: size / 2 }, avatarStyle]}>
      <Text>{name}</Text>
    </View>
  );
};

export default Avatar;
```

#### How to make a reusable custom component
Creating a custom component that allows you to switch between different styles easily can save you time and reduce code duplication.

Here is an example of creating a custom Text component with different font sizes:

```tsx
import React from 'react';
import { StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';

type Sizes = 'lg' | 'md' | 'sm';

export interface TextProps extends RNTextProps {
  text?: string;
  size?: Sizes;
}

const Text = (props: TextProps) => {
  const { size, text, children, style: styleOverride, ...rest } = props;

  const sizeStyles: Record<Sizes, TextStyle> = {
    lg: { fontSize: 20, lineHeight: 32 },
    md: { fontSize: 18, lineHeight: 26 },
    sm: { fontSize: 16, lineHeight: 24 },
  };

  const styles = [
    sizeStyles[size as Sizes],
    styleOverride,
  ];

  const content = text || children;

  return <RNText {...rest} style={styles}>{content}</RNText>;
  }

  ```

  #### Best practices for creating custom components
  
  1. Keep your components small and focused on a specific piece of functionality.
  2. Use descriptive names for your components, so that their purpose is clear at a glance.
  3. Document your components' props and behavior, so that other developers can easily understand how to use and modify them.
