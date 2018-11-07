/**
 * Receive settings from the HTML source in form
 * of application initial state.
 *
 * This reducer is not meant to handle any type of change
 */

export const initialState = {
    backend: 'http://localhost:8080/',
}

export const reducer = (state = initialState, action) => state
export default reducer
