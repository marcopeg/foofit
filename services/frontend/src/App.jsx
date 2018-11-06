import React from 'react'
import loadable from 'lib/custom-loadable'
import { isMobile } from 'react-device-detect'
import 'app/reset.css'
import 'app/base.css'

const AppMobile = loadable({
    loader: () => import('features/mobile/AppMobile'),
})

const AppDesktop = loadable({
    loader: () => import('features/desktop/AppDesktop'),
})

const App = () => isMobile
    ? <AppMobile />
    : <AppDesktop />

export default App
