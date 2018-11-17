/**
 * Redux App State
 * ---------------
 * 
 * the app state is mainly handled by [redux](https://redux.js.org/) which is
 * wired up automagically by `create-react-app-ssr`.
 * 
 * Among the state capabilities we can list:
 * 
 * - [redux-thunk](https://github.com/reduxjs/redux-thunk)
 * - [connected-react-router](https://github.com/supasate/connected-react-router)
 * - [redux-events-middleware](https://www.npmjs.com/package/redux-events-middleware)
 * - [react-redux-feature](https://www.npmjs.com/package/react-redux-feature)
 * 
 * You should pack most of your reducers as features, but in any case you can
 * pass down a bounch of reducers here as well. It's a normal structure:
 * 
 *     {
 *       reducer1: (state = {}) => state,
 *       reducer2: (state = {}) => state,
 *       ...
 *     }
 * 
 * Regarding the features [you can read more here](https://www.npmjs.com/package/react-redux-feature), 
 * but anyway here you need to provide the list of features that you have enabled
 * in your application.
 * 
 * It might be as simple as an empty array if you don't heve any.
 * 
 * A possible list could look like this one:
 * 
 *     [
 *       {
 *         reducers: {},
 *         services: [],
 *         listeners: [],
 *       },
 *       ...
 *     ]
 * 
 */

import { createAppStateFactory} from 'create-react-app-ssr/lib/create-app-state-factory'
import reducers from './reducers'
import features from '../features'

export const createState = createAppStateFactory(reducers, features)
