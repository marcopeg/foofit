import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ProgramsList, ProgramDetails } from 'features/mobile-programs'
import './AppMobile.css'

const AppMobile = () => (
    <Switch>
        <Route exact path="/welcome" component={ProgramsList} />
        <Route path="/program/:id" component={ProgramDetails} />
    </Switch>
)

export default AppMobile
