import { AppRegistry } from 'react-native'
import App from './app/app'

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

AppRegistry.registerComponent('App', () => App)
export default App
