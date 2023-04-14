import { AppRegistry } from 'react-native'
import App from './app/app'
import Reactotron from './ReactotronConfig'

Reactotron.connect()

AppRegistry.registerComponent('App', () => App)
export default App
