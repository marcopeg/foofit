
export const init = () => () => {
    // console.log('init foo')
}

export const start = () => async (dispatch, getState) => {
    const { ssr } = getState()
    console.log(ssr.getApiUrl('/foo'))
    // console.log('start foo')

    const p = new Promise((resolve) => {
        setTimeout(() => {
            dispatch({ type: '@@THEN'})
            dispatch({ type: 'fooVal', payload: 666 })
            resolve()
        }, 10)
    })
    
    ssr.await(p)
    // console.log('did the deed')
}
