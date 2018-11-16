
export const initialState = {
    value: 123,
}

/**
 * Actions
 */


/**
 * Handlers
 */

export const actionHandlers = {}

export const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}

export default reducer

