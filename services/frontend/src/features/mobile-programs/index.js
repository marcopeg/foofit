export const reducers = {
    programs: require('./programs.reducer').default,
}
export const services = [
    require('./programs.service'),
]
export const listeners = []
export { default as ProgramsList } from './containers/ProgramsList'
