/**
 * Receive settings from the HTML source in form
 * of application initial state.
 *
 * This reducer is not meant to handle any type of change
 */

export const initialState = {
    version: '0.0.0',
    nodeEnv: 'development',
    graphqlEndpoint: 'http://localhost:8080/api',
}

export const reducer = (state = initialState, action) => state
export default reducer
