
export const initialState = {
    hasLogin: false,
    id: null,
}

/**
 * Actions
 */

export const SET_LOGIN = 'setLogin@programs'

export const setLogin = ({ id }) => ({
    type: SET_LOGIN,
    payload: { id },
})


/**
 * Handlers
 */

export const actionHandlers = {
    '@reset': () => ({ ...initialState }),
    [SET_LOGIN]: (state, { payload }) => ({
        ...state,
        hasLogin: true,
        id: payload.id,
    }),
}

export const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}

export default reducer

