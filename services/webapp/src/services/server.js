import path from 'path'
import express from 'express'
import compression from 'compression'
import cors from 'cors'
import millisecond from 'millisecond'
import { logInfo } from 'services/logger'
import { createAppRouter } from 'routes/index'

const app = express()

export const init = ({ loginDuration }) => {
    logInfo('init server')
    const isDev = [ 'development', 'test' ].indexOf(process.env.NODE_ENV) !== -1

    // setup cors
    if (isDev) {
        logInfo('[server] CORS are enabled in development')
        app.use(cors({
            origin: 'http://localhost:3000',
            credentials: true,
        }))
    }

    // allow routes and controllers to set a cookie
    app.use((req, res, next) => {
        const maxAge = millisecond(loginDuration)
        const secure = isDev

        res.setAppCookie = (name, content) => {
            res.cookie(name, content, {
                httpOnly: true,
                secure,
                maxAge,
            })
        }
        next()
    })

    app.use(compression())
    app.use(createAppRouter())

    // serve static files
    app.use(express.static(path.resolve(__dirname, '..', '..', 'public')))
    app.use(express.static(path.resolve(__dirname, '..', '..', 'build-client')))
    app.use('*', express.static(path.resolve(__dirname, '..', '..', 'build-client')))
}

export const start = ({ port }) => {
    logInfo('start server')
    app.listen(port, () => logInfo(`[server] express is running on ${port}`))
}
