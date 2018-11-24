import loadable from 'react-loadable'

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './AppMobile.css'

import ErrorScreen from './screens/ErrorScreen'
import Home from './screens/Home'
import Login from './screens/Login'

import { MobilePrograms } from 'features/mobile-programs'

const Signup = loadable({
    loader: () => import(/* webpackChunkName: "MobileSignup" */ './screens/Signup'),
    loading: () => 'loading...',
})

const AppMobile = () => (
    <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/error'} component={ErrorScreen} />
        <Route exact path={'/signup'} component={Signup} />
        <Route exact path={'/login'} component={Login} />
        <Route path={'/programs'} component={MobilePrograms} />
    </Switch>
)

// Preload modules
Signup.preload()
MobilePrograms.preload()

export default AppMobile
