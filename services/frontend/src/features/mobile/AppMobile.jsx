import loadable from 'lib/custom-loadable'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './AppMobile.css'

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
        <Route exact path="/" component={() => <Redirect to="/welcome"/>} />
        <Route exact path="/welcome" component={ProgramsList} />
        <Route path="/program/:programId/:programSlug/:trainingId/:trainingSlug/play" component={TrainingWatch} />
        <Route path="/program/:programId/:programSlug/:trainingId/:trainingSlug" component={TrainingDetails} />
        <Route path="/program/:programId/:programSlug" component={ProgramDetails} />
    </Switch>
)

export default AppMobile
