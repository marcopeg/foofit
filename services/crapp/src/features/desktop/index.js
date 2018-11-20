// import loadable from 'lib/custom-loadable'
import loadable from 'react-loadable'

export const reducers = {}
export const services = []
export const listeners = []

// export { default as AppDesktop } from './AppDesktop'
export const AppDesktop = loadable({
    loader: () => import('./AppDesktop'),
    loading: () => 'loading...',
})
