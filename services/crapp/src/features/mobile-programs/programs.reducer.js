
export const initialState = {
    isLoading: false,
    loadingError: null,
    items: [],
}

/**
 * Actions
 */

export const SET_IS_LOADING = 'setIsLoading@programs'
export const SET_LOADING_ERROR = 'setLoadingError@programs'
export const SET_LIST_ITEMS = 'setListItems@programs'

export const setIsLoading = (status) => ({
    type: SET_IS_LOADING,
    payload: status,
})

export const setLoadingError = (err) => ({
    type: SET_LOADING_ERROR,
    payload: err,
})

export const setListItems = (items) => ({
    type: SET_LIST_ITEMS,
    payload: items,
})


/**
 * Handlers
 */

export const actionHandlers = {
    '@reset': () => ({ ...initialState }),
    [SET_IS_LOADING]: (state, { payload }) => ({
        ...state,
        isLoading: payload,
    }),
    [SET_LOADING_ERROR]: (state, { payload }) => ({
        ...state,
        loadingError: payload,
    }),
    [SET_LIST_ITEMS]: (state, { payload }) => ({
        ...state,
        items: payload,
    }),
}

export const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}

export default reducer

