import Reactotron, { asyncStorage } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga'

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.15.72' })
    .use(reactotronRedux())
    .use(reactotronSaga())
    .use(asyncStorage())
    .connect()

  tron.clear()
  console.tron = tron
}
