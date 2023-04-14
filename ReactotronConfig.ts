// @ts-nocheck
import { noop } from 'lodash/fp';
import Reactotron, { asyncStorage } from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { name } from './package.json';

// Teach TypeScript about the bad things we want to do.
declare global {
    interface Console {
        /**
         * Hey, it's Reactotron if we're in dev, and no-ops if we're in prod.
         */
        tron: Required<typeof Reactotron>;
    }
}

// in dev, we attach Reactotron, in prod we attach a interface-compatible mock.
if (__DEV__) {
    //attach reactotron to console.tron
  console.tron = Reactotron; // attach reactotron to `console.tron`
} else {
  // attach a mock so if things sneaky by our __DEV__ guards, we won't crash.
  console.tron = {
    apiResponse: noop,
    asyncStorageHandler: noop,
    benchmark: () => ({
    step: () => undefined,
    stop: () => undefined,
    last: noop,
  }),
    clear: noop,
    close: noop,
    configure: () => undefined,
    connect: () => undefined,
    debug: noop,
    display: noop,
    error: noop, // NOTE: THIS CAN BE UPDATED TO PUSH MESSAGE TO ERROR SYSTEM
    image: noop,
    log: noop,
    logImportant: noop,
    onCustomCommand: () => undefined,
    overlay: noop,
    reportError: noop,
    repl: noop,
    send: noop,
    setAsyncStorageHandler: () => undefined,
    startTimer: () => undefined,
    stateActionComplete: noop,
    stateBackupResponse: noop,
    stateKeysResponse: noop,
    stateValuesChange: noop,
    stateValuesResponse: noop,
    storybookSwitcher:  () => undefined,
    use: () => undefined,
    useReactNative: () => undefined,
    warn: noop,
  };
}

const reactotron = Reactotron.configure({name: name})
  .setAsyncStorageHandler(AsyncStorage)
  .use(asyncStorage({}))
  .useReactNative({
        asyncStorage: { ignore: ['secret'] }
    }) // add all built-in react native plugins
  .connect();

export default reactotron;