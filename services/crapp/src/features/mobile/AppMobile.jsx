import loadable from 'lib/custom-loadable'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './AppMobile.css'

import ErrorScreen from 'features/mobile-public/screens/ErrorScreen'
import Home from 'features/mobile-public/screens/Home'
import Login from 'features/mobile-public/screens/Login'

const Signup = loadable({
    loader: () => import(/* webpackChunkName: "MobileSignup" */ 'features/mobile-public/screens/Signup'),
})

const ProgramsList = loadable({
    loader: () => import(/* webpackChunkName: "MobileProgramsList" */ 'features/mobile-programs/screens/ProgramsList'),
})

const ProgramDetails = loadable({
    loader: () => import(/* webpackChunkName: "MobileProgramDetails" */ 'features/mobile-programs/screens/ProgramDetails'),
})

const TrainingDetails = loadable({
    loader: () => import(/* webpackChunkName: "MobileTrainingDetails" */ 'features/mobile-programs/screens/TrainingDetails'),
})

const TrainingWatch = loadable({
    loader: () => import(/* webpackChunkName: "MobileTrainingWatch" */ 'features/mobile-programs/screens/TrainingWatch'),
})

const AppMobile = () => (
    <Switch>
        <Route exact path={'/app/'} component={Home} />
        <Route exact path={'/app/error'} component={ErrorScreen} />
        <Route exact path={'/app/signup'} component={Signup} />
        <Route exact path={'/app/login'} component={Login} />
        <Route exact path={'/app/welcome'} component={ProgramsList} />
        <Route path={'/app/program/:programId/:programSlug/:trainingId/:trainingSlug/play'} component={TrainingWatch} />
        <Route path={'/app/program/:programId/:programSlug/:trainingId/:trainingSlug'} component={TrainingDetails} />
        <Route path={'/app/program/:programId/:programSlug'} component={ProgramDetails} />
    </Switch>
)

// Preload modules
// ProgramsList.preload()
// ProgramDetails.preload()
// TrainingDetails.preload()
// TrainingWatch.preload()

export default AppMobile
