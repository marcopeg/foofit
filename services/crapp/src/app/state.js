import { createSSRState } from 'create-react-app-ssr/lib/create-ssr-state'

import reducers from './reducers'
import features from '../features'

export const createState = createSSRState(reducers, features)
