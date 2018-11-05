import React from 'react'
import loadable from 'react-loadable'
import { isMobile } from 'react-device-detect'
import 'app/reset.css'
import 'app/base.css'

const AppMobile = loadable({
    loader: () => import('features/mobile/AppMobile'),
    loading: () => null,
})

const AppDesktop = loadable({
    loader: () => import('features/desktop/AppDesktop'),
    loading: () => null,
})

const App = () => isMobile
    ? <AppMobile />
    : <AppDesktop />

export default App
