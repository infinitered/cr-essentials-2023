### Chapter 7

# Filling in the List

In this chapter, we will explore how to render and manage lists in React Native using the FlatList component. Rendering lists is a crucial aspect of many applications, and understanding how to create efficient, performant lists is essential for a smooth user experience.

## Tasks

### Pre-requisites

No new libraries or programs are required for this chapter.

### Tasks for this section

1. [Code-a-long] Update `useDog`, `useDogs`, `useFavorites` to call DogsAPI
    - Try it fetching all the dogs without pagination. (There are about 1000 of them!)
2. [Code-a-long] Use the pagination features of FlatList to fetch data as the user scrolls
3. Try different settings for the pagination props to see how they affect performance

### Options if you finish early

- Experiment with different Flastlist navigation props like 'scrollToIndex' and 'scrollToEnd'.
- Implement pagination in FlatList.
- Explore other list components in React Native, such as SectionList and VirtualizedList.

## Resources

- [React Native FlatList documentation](https://reactnative.dev/docs/flatlist)
- [Optimizing FlatList Configuration](https://reactnative.dev/docs/optimizing-flatlist-configuration)

### Why do we need FlatList to render lists?
Every app, is almost multiple lists of things. So we need to understand the workings of lists in React Native. There are multiple ways of rendering lists in React Native.

We can use map to render a list of components:

```tsx
import React from 'react';
import { Text } from 'react-native';

interface Item {
  id: number;
  title: string;
}

const items: Item[] = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
];

const MyList: React.FC = () => {
  return (
    <>
      {items.map((item: Item) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </>
  );
};

export default MyList;

```

The example works; however, there is a drawback to this approach. It renders all items simultaneously, potentially causing performance issues when dealing with extensive lists. Furthermore, it does not utilize the built-in optimizations offered by the FlatList component.

### What is FlatList?

FlatList is a virtualized list in React Native that:

- Renders only the visible items on the screen, improving performance.
- Offers built-in performance optimizations.
- Provides flexibility, making it a popular choice.
- Is relatively easy to implement, although it may seem confusing initially.

#### FlatList Syntax

```tsx
import { FlatList } from 'react-native';

<FlatList
  data={/* array to render */}
  keyExtractor={/* function to extract unique keys for each item */}
  renderItem={/* function to render each item in the array */}
/>
```

- `data` prop: Pass the array to display, which can be JSON data from an API.
- `keyExtractor` prop: Specify a unique key for each item in the array. FlatList will automatically look for the 'key' or 'id' property if this prop isn't provided.
- `renderItem` prop: Define how React Native should render the list items.

#### Let's implement FlatList

A simple example:

```tsx
const data = [
  { id: 1, title: 'Black', description: '' },
  { id: 2, title: 'Green', description: '' },
];

const Item = ({ title, description }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <Text>{description}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item title={item.title} description={item.description} />
);

return (
  <View style={styles.container}>
    {data && (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    )}
  </View>
);
```

Breaking down the code:

- The `Item` component accepts 'title' and 'description' props and displays them in the UI.
- The `renderItem` function renders the `Item` component for each item in the array, displaying the 'title' and 'description' fields from each object.
- The `keyExtractor` prop informs React Native to use the 'id' field as the key.
- Finally, we use conditional rendering to display the data with the `FlatList` React Native component.

#### FlatList Props

FlatList offers various customization options through different props, allowing you to create polished and feature-rich lists:

1. **Header Component**: Use `ListHeaderComponent` to render a header component, such as a search bar.
2. **Footer Component**: Use `ListFooterComponent` to render a footer component, for example, a button to scroll back up.
3. **Separator Component**: Use `ItemSeparatorComponent` to create separators between list items for better UI.
4. **Handling Empty Lists**: Use `ListEmptyComponent` to display a message when the list is empty.
5. **Pull to Refresh**: Implement the `onRefresh` and `refreshing` props for pull-to-refresh functionality.
6. **Horizontal FlatList**: Use the `horizontal` prop for horizontal scrolling lists.
7. **Multiple Columns**: Use the `numColumns` prop to create a grid of items.
8. **Filtering**: Use the `useMemo` hook to memoize the result of computationally expensive filtering functions.
9. **Debouncing**: Use the `debounce` function to wait for user input before executing a function.
10. **Pagination**: Implement the `onEndReached` prop to load more data as the user scrolls down.
11. **Navigation Methods**: Use methods like `scrollToIndex` and `scrollToEnd` to navigate the list programmatically.

These customization options enhance the user experience and offer flexibility in creating various list layouts and functionalities.

#### Best Practices

1. Use the `keyExtractor` prop consistently to prevent warning messages.
2. Refrain from using anonymous functions in the `renderItem` prop to avoid performance issues due to re-rendering of list items upon state changes.
3. Opt for lighter components in the `renderItem` prop for faster rendering and a cleaner UI by limiting the displayed information in your list item.
4. Consult the [React Native docs](https://reactnative.dev/docs/optimizing-flatlist-configuration) for further optimization tips.
