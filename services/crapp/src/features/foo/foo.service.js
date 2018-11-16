
export const init = () => () => {
    console.log('init foo')
}

export const start = () => (dispatch) => {
    console.log('start foo')
    setTimeout(() => dispatch({ type: '@@THEN'}), 1000)
}