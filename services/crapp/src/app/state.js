
import { createAppStateFactory} from 'create-react-app-ssr/lib/create-app-state-factory'

import features from '../features'
import reducers from './reducers'

export const createState = createAppStateFactory(reducers, features)
