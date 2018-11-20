export const reducers = {
    auth: require('./auth.reducer').default,
}
export const services = []
export const listeners = [
    require('./auth.listener').default,
]
