// import loadable from 'lib/custom-loadable'
import loadable from 'react-loadable'

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './AppMobile.css'

import ErrorScreen from 'features/mobile-public/screens/ErrorScreen'
import Home from 'features/mobile-public/screens/Home'
import Login from 'features/mobile-public/screens/Login'

const Loading = () => 'loading...'

const Signup = loadable({
    loader: () => import(/* webpackChunkName: "MobileSignup" */ 'features/mobile-public/screens/Signup'),
    loading: Loading,
})

const ProgramsList = loadable({
    loader: () => import(/* webpackChunkName: "MobileProgramsList" */ 'features/mobile-programs/screens/ProgramsList'),
    loading: Loading,
})

const ProgramDetails = loadable({
    loader: () => import(/* webpackChunkName: "MobileProgramDetails" */ 'features/mobile-programs/screens/ProgramDetails'),
    loading: Loading,
})

const TrainingDetails = loadable({
    loader: () => import(/* webpackChunkName: "MobileTrainingDetails" */ 'features/mobile-programs/screens/TrainingDetails'),
    loading: Loading,
})

const TrainingWatch = loadable({
    loader: () => import(/* webpackChunkName: "MobileTrainingWatch" */ 'features/mobile-programs/screens/TrainingWatch'),
    loading: Loading,
})

const AppMobile = () => (
    <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/error'} component={ErrorScreen} />
        <Route exact path={'/signup'} component={Signup} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/welcome'} component={ProgramsList} />
        <Route path={'/program/:programId/:programSlug/:trainingId/:trainingSlug/play'} component={TrainingWatch} />
        <Route path={'/program/:programId/:programSlug/:trainingId/:trainingSlug'} component={TrainingDetails} />
        <Route path={'/program/:programId/:programSlug'} component={ProgramDetails} />
    </Switch>
)

// Preload modules
// ProgramsList.preload()
// ProgramDetails.preload()
// TrainingDetails.preload()
// TrainingWatch.preload()

export default AppMobile
