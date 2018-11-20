import { createAppStateFactory} from 'create-react-app-ssr/lib/create-app-state-factory'

import reducers from './reducers'
import features from '../features'

export const createState = createAppStateFactory(reducers, features)
