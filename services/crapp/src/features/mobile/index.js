import loadable from 'lib/custom-loadable'

export const reducers = {}
export const services = []
export const listeners = []

export const AppMobile = loadable({
    loader: () => import(/* webpackChunkName: "AppMobile" */ './AppMobile'),
})
