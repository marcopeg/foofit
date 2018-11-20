
export const initialState = {
    name: 'foo',
}

/**
 * Actions
 */

export const SET_NAME = 'setName@website'

export const setName = (name) => ({
    type: SET_NAME,
    payload: name,
})


/**
 * Handlers
 */

export const actionHandlers = {
    [SET_NAME]: (state, { payload }) => ({
        ...state,
        name: payload,
    }),
}

export const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}

export default reducer

