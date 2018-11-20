import React from 'react'
import loadable from 'react-loadable'
// import loadable from 'lib/custom-loadable'

export const reducers = {
    website: require('./website.reducer').default,
}
export const services = []
export const listeners = []

// export { default as Website } from './Website'
export const Website = loadable({
    loader: () => import('./Website'),
    loading: () => <div>loading</div>,
})
