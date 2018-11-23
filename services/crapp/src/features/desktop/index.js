// import loadable from 'lib/custom-loadable'
import loadable from 'react-loadable'

export const reducers = {}
export const services = []
export const listeners = []

const Loading = () => 'loading...'

export const AppDesktop = loadable({
    loader: () => import(/* webpackChunkName: "AppDesktop" */ './AppDesktop'),
    loading: () => Loading,
})
