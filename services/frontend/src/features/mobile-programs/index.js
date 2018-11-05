export const reducers = {
    programs: require('./programs.reducer').default,
}
export const services = [
    require('./programs.service'),
]
export const listeners = []

export { default as ProgramsList } from './containers/ProgramsList'
export { default as ProgramDetails } from './containers/ProgramDetails'
export { default as TrainingDetails } from './containers/TrainingDetails'
export { default as TrainingWatch } from './containers/TrainingWatch'
