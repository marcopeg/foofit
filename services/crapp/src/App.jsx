/* eslint-disable */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import { isMobile } from 'react-device-detect'
import 'app/reset.css'
import 'app/base.css'

import { Website } from 'features/website'
import { AppMobile } from 'features/mobile'
import { AppDesktop } from 'features/desktop'

const isMobile = true

export default () => (
    <Switch>
        <Route exact path="/" component={Website} />
        <Route path="/app" component={isMobile ? AppMobile : AppDesktop} />
    </Switch>
)
// export default () => isMobile
//     ? <AppMobile />
//     : <AppDesktop />
