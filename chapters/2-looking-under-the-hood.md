### Chapter 2

# Looking Under the Hood

In this chapter, we will:

- Learn about Reactotron and its role in inspecting React Native apps
- Discover the Debug Menu and its importance during development
- Explore remote debugging with React Native
- Understand Redbox errors and YellowBox warnings

## Tasks

### Pre-requisites

1. Download and install Reactotron from the [Github page](https://github.com/infinitered/reactotron/releases)

### Tasks for this section

1. Open the Debug Menu and explore its features
    - try using the keyboard shortcuts on simulator
    - try using the shake gesture on a real device (if you have one)
2. Try manually reloading the app
    - use the reload button in the Debug Menu
    - use the keyboard shortcut on simulator
    - Press `r` in the expo terminal
3. Try the "Debug JS Remotely" option
4. Write some code that throws an `Error` to trigger a Redbox
5. Use `console.warn()` to trigger a YellowBox warning

### Options if you finish early

1. Explore Reactotron's features further
2. Use the remote debugger to set breakpoints
3. Add a [custom command](https://github.com/infinitered/reactotron/blob/master/docs/custom-commands.md) to Reactotron

## Resources

### Reactotron

[Reactotron](https://github.com/infinitered/reactotron) is a tool for inspecting React Native apps. It offers advanced
logging, state management, network request inspection, and more. It also supports plugins for popular state-management
systems like Redux and Mobx State Tree.

### Logging to Reactotron

With Reactotron, we add a `.tron` property to the console object. This lets us log to Reactotron and send custom
commands. The `./ReactotronConfig.js` file demonstrates this.

The custom logging method, `console.tron.log()`, sends log information directly to Reactotron. To use it, replace your
usual `console.log()` statements with `console.tron.log()`.

Example:

```javascript
console.tron.log('Hello, Reactotron!');
```

This log message appears in the Reactotron app in real time.

### The Debug Menu

Debugging React Native apps can be tricky since they run on mobile devices, not your computer. Expo and React Native
offer helpful tools through the Debug Menu. To access the Debug Menu, shake a physical device, press CMD+CTRL+Z on an
iOS Simulator, or press CTRL+M or shake the window on an Android Emulator. If your app gets stuck, opening the Debug
Menu and refreshing the app can often help.

### Debugging Remotely

React Native apps run JavaScript code on the mobile device, which can make debugging challenging. To assist in
debugging, use the "Open JS Debugger" option, which runs the code in a Chrome instance on your computer while sending
outputs to the mobile device over the network. When debugging remotely, you can utilize Chrome DevTools to view logs,
set breakpoints, and inspect network traffic.

### Redbox Errors and YellowBox Warnings

In development mode, React displays Redbox errors for critical issues and YellowBox warnings for minor problems. These
messages provide error information, stack traces, and options to reload the app or dismiss the message. In production
builds, these messages won't appear, and the app may crash. Errors and warnings will also be logged to the console or
Reactotron.

