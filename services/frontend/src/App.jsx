import React from 'react'
import loadable from 'react-loadable'
import { isMobile } from 'react-device-detect'

const AppMobile = loadable({
    loader: () => import('./AppMobile'),
    loading: () => null,
})

const AppDesktop = loadable({
    loader: () => import('./AppDesktop'),
    loading: () => null,
})

const App = () => isMobile
    ? <AppMobile />
    : <AppDesktop />

export default App
