import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ProgramsList, ProgramDetails, TrainingDetails, TrainingWatch } from 'features/mobile-programs'
import './AppMobile.css'

const AppMobile = () => (
    <Switch>
        <Route exact path="/welcome" component={ProgramsList} />
        <Route path="/program/:programId/:programSlug/:trainingId/:trainingSlug/play" component={TrainingWatch} />
        <Route path="/program/:programId/:programSlug/:trainingId/:trainingSlug" component={TrainingDetails} />
        <Route path="/program/:programId/:programSlug" component={ProgramDetails} />
    </Switch>
)

export default AppMobile
