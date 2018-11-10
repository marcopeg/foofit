// import loadable from 'lib/custom-loadable'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './AppMobile.css'

import Home from 'features/mobile-public/screens/Home'
import Signup from 'features/mobile-public/screens/Signup'
import Login from 'features/mobile-public/screens/Login'
import ProgramsList from 'features/mobile-programs/screens/ProgramsList'
import ProgramDetails from 'features/mobile-programs/screens/ProgramDetails'
import TrainingDetails from 'features/mobile-programs/screens/TrainingDetails'
import TrainingWatch from 'features/mobile-programs/screens/TrainingWatch'

// const Home = loadable({
//     loader: () => import('features/mobile-public/screens/Home'),
// })

// const Signup = loadable({
//     loader: () => import('features/mobile-public/screens/Signup'),
// })

// const ProgramsList = loadable({
//     loader: () => import('features/mobile-programs/screens/ProgramsList'),
// })

// const ProgramDetails = loadable({
//     loader: () => import('features/mobile-programs/screens/ProgramDetails'),
// })

// const TrainingDetails = loadable({
//     loader: () => import('features/mobile-programs/screens/TrainingDetails'),
// })

// const TrainingWatch = loadable({
//     loader: () => import('features/mobile-programs/screens/TrainingWatch'),
// })

const AppMobile = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/welcome" component={ProgramsList} />
        <Route path="/program/:programId/:programSlug/:trainingId/:trainingSlug/play" component={TrainingWatch} />
        <Route path="/program/:programId/:programSlug/:trainingId/:trainingSlug" component={TrainingDetails} />
        <Route path="/program/:programId/:programSlug" component={ProgramDetails} />
    </Switch>
)

// Preload modules
// ProgramsList.preload()
// ProgramDetails.preload()
// TrainingDetails.preload()
// TrainingWatch.preload()

export default AppMobile
