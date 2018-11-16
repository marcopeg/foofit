export const reducers = {
    foo: require('./foo.reducer').default,
}
export const services = [
    require('./foo.service'),
]
export const listeners = [
    require('./foo.listener').default,
]
