import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ProgramsList } from 'features/mobile-programs'
import './AppMobile.css'

const AppMobile = () => (
    <Switch>
        <Route exact path="/welcome" component={ProgramsList} />
    </Switch>
)

export default AppMobile
