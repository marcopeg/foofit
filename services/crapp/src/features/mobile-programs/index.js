import loadable from 'react-loadable'

const Loading = () => 'loading...'

export const reducers = {
    programs: require('./programs.reducer').default,
}
export const services = [
    require('./programs.service'),
]
export const listeners = []

export const MobilePrograms = loadable({
    loader: () => import(/* webpackChunkName: "MobilePrograms" */ './MobilePrograms'),
    loading: Loading,
})
