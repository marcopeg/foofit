import loadable from 'lib/custom-loadable'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './AppMobile.css'

const Home = loadable({
    loader: () => import('features/mobile-public/containers/Home'),
})

const Signup = loadable({
    loader: () => import('features/mobile-public/containers/Signup'),
})

const ProgramsList = loadable({
    loader: () => import('features/mobile-programs/containers/ProgramsList'),
})

const ProgramDetails = loadable({
    loader: () => import('features/mobile-programs/containers/ProgramDetails'),
})

const TrainingDetails = loadable({
    loader: () => import('features/mobile-programs/containers/TrainingDetails'),
})

const TrainingWatch = loadable({
    loader: () => import('features/mobile-programs/containers/TrainingWatch'),
})

const AppMobile = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/welcome" component={ProgramsList} />
        <Route path="/program/:programId/:programSlug/:trainingId/:trainingSlug/play" component={TrainingWatch} />
        <Route path="/program/:programId/:programSlug/:trainingId/:trainingSlug" component={TrainingDetails} />
        <Route path="/program/:programId/:programSlug" component={ProgramDetails} />
    </Switch>
)

// Preload modules
ProgramsList.preload()
ProgramDetails.preload()
TrainingDetails.preload()
TrainingWatch.preload()

export default AppMobile
