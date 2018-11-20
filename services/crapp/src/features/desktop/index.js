import loadable from 'lib/custom-loadable'

export const reducers = {}
export const services = []
export const listeners = []

export const AppDesktop = loadable({
    loader: () => import(/* webpackChunkName: "AppDesktop" */ './AppDesktop'),
})
