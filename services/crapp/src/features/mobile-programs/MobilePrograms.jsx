import React from 'react'
import loadable from 'react-loadable'
import { Switch, Route } from 'react-router-dom'

import { AuthRedirect } from 'features/auth'
import ProgramsList from './screens/ProgramsList'

const ProgramDetails = loadable({
    loader: () => import(/* webpackChunkName: "MobileProgramDetails" */ './screens/ProgramDetails'),
    loading: () => 'loading...',
})

const TrainingDetails = loadable({
    loader: () => import(/* webpackChunkName: "MobileTrainingDetails" */ './screens/TrainingDetails'),
    loading: () => 'loading...',
})

const TrainingWatch = loadable({
    loader: () => import(/* webpackChunkName: "MobileTrainingWatch" */ './screens/TrainingWatch'),
    loading: () => 'loading...',
})

const MobilePrograms = () => (
    <AuthRedirect>
        <Switch>
            <Route exact path={'/programs'} component={ProgramsList} />
            <Route path={'/programs/:programId/:programSlug/:trainingId/:trainingSlug/play'} component={TrainingWatch} />
            <Route path={'/programs/:programId/:programSlug/:trainingId/:trainingSlug'} component={TrainingDetails} />
            <Route path={'/programs/:programId/:programSlug'} component={ProgramDetails} />
        </Switch>
    </AuthRedirect>
)

ProgramDetails.preload()
TrainingDetails.preload()
TrainingWatch.preload()

export default MobilePrograms
