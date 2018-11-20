// import loadable from 'lib/custom-loadable'
import loadable from 'react-loadable'

export const reducers = {}
export const services = []
export const listeners = []

// export { default as AppMobile } from './AppMobile'
export const AppMobile = loadable({
    loader: () => import('./AppMobile'),
    loading: () => 'loading...',
})
