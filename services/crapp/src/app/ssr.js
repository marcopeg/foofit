import React from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { createSSRRender } from 'create-react-app-ssr/lib/create-ssr-render'
import { createState } from './state'
import App from '../App'

const Root = ({ location, context, store, ...props }) => {
    // console.log('---> render static')
    // console.log('location:', location)
    // console.log('context:', context)
    return (
        <Provider store={store}>
            <StaticRouter location={location} context={context}>
                <App {...props} />
            </StaticRouter>
        </Provider>
    )    
}


export const staticRender = createSSRRender(Root, { createState })
