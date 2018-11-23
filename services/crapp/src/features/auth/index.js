export const reducers = {
    auth: require('./auth.reducer').default,
}
export const services = [
    require('./auth.service'),
]
export const listeners = [
    require('./auth.listener').default,
]
