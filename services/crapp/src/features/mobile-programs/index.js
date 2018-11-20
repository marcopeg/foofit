export const reducers = {
    programs: require('./programs.reducer').default,
}
export const services = [
    require('./programs.service'),
]
export const listeners = []
