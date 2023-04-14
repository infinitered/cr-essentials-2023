### Chapter 8

# Working with Long Lists and Paginated Data

In this chapter, we will learn how to:

1. Work with large lists of data in React Native
2. Optimize the performance of long lists in React Native
3. Fetch and display paginated data from a remote API
4. Contain logic in custom hooks to keep our components clean

## Tasks

### Tasks for this section

1. Replace the static 'dogs.json' file with a call to the DogsAPI
   - First try it without pagination, just get all the dogs. (There are about 1000 of them!)
2. Use the pagination features of FlatList to fetch data as the user scrolls
3. Try different settings for `onEndReachedThreshold` and `initialNumToRender` to see how they affect performance

### Options if you finish early

1. Implement pull-to-refresh functionality to refresh the data in the list
2. Experiment with different styles and animations for your list items

## Resources

### List performance matters

On mobile devices, we have to work on devices with less powerful processors,
and less memory than is available on desktop machines.

When displaying large amounts of data, we need to be careful to do it in a way that is performant,
so our app interactions are smooth, fluid and responsive.

### Virtualized Lists

If we have a list of 1000 items, rendering them all as views on a single page would take a long time, and use a lot of memory.

Instead, we can use a technique called **"virtualization"**, where we only render the items that are visible on the screen.

When the user scrolls, we can re-use the views that are no longer visible, and update them with the new data. This means we don't need to pay
the cost of creating a whole new view for each item in the list.

Think of it like a ride at an amusement park, the list items are the cars that keep going around the track, and the data is the people who get in and out when the cars passes through the station.  

Whether you're using a `FlatList` or a `SectionList`, React Native will automatically use virtualization to only render the items that are visible on the screen. Both offer props you can use to tune the performance of the list for your specific use case.

The React Native Docs have a great [guide on tuning lists](https://reactnative.dev/docs/optimizing-flatlist-configuration), and we'll cover some of the highlights here.

### Use Light Components for Items in your list

Because items in virtualized lists are constantly being rendered in the background as the user scrolls, we should keep them as light as possible.

So, when writing ListItem components:

1. Use optimized / low-res images -- large images take a long time to load into memory
2. Keep the component as simple as possible -- branching logic takes longer to evaluate and may cause more re-renders
3. Memoize your 'renderItem' function so it doesn't trigger re-renders

### `initialNumToRender` and `windowSize`

These are props on FlatList that can be used to tune the performance of the list.

`initialNumToRender` controls how many items are rendered when the list is first displayed. Set it too small and you may encounter "blank" items as you scroll quickly through the list. Set it too large and your list will be slow to load.

`windowSize` prop controls how many items are rendered at a time. This is measured in multiples of `initialNumToRender`. So if `initialNumToRender` is 10, and `windowSize` is 2, then 20 items will be rendered at a time.

The default is 21, which is a good starting point. It'll render ten 'windows' above and ten below the screen.

### Paginated Data

If we have a list of 1000 items, then it doesn't make sense to fetch all 1000 if the app can only display ten at a time.
It wastes bandwidth, fetching items that may never appear on screen,
and it can introduce significant lag in the UX.

Instead we should fetch only the data we need to display, and fetch more as the user scrolls.

The FlatList component provides a prop called `onEndReached` which takes a function that is called when the user scrolls
to a certain point in the list. This callback can be used to fetch the next batch of data from the server.

Another prop: `onEndReachedThreshold` can be used to specify how close to the end of the list the user needs to scroll
before the callback is called.

### Fetching data from an API

Use the following code to fetch data from an API and populate your list:

```tsx
export default function App() {
  const [data, setData] = useState(null);

  const getData = async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await resp.json();
    setData(data);
  };
  //on first mount, fetch data.
  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item:{description, title}, index }) => (
    <View>
      <Text style={styles.title}>
        {index}. {title}
      </Text>
      <Text> {description} </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}
```
