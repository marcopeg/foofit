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

    // CORS
    // this is a development only setup that allow to run the
    // frontend from a different server (ParcelJS or WebpackDevSever)
    if (isDev) {
        logInfo('[server] CORS are enabled in development for ANY ORIGIN!')
        logInfo('[server] -- be careful not to deploy this to production!')
        app.use(cors({
            origin: (o, cb) => cb(null, true),
            credentials: true,
        }))
    }

    // COOKIES
    // allow routes and controllers to set a cookie
    app.use((req, res, next) => {
        const options = {
            httpOnly: true,
            secure: !isDev,
            maxAge: millisecond(loginDuration),
        }

        // Set cookie
        res.setAppCookie = (name, content) => {
            res.cookie(name, content, options)
        }

        // Delete cookie
        res.deleteAppCookie = name => res.clearCookie(name)

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
    logInfo('[server] start server')
    app.listen(port, () => logInfo(`[server] express is running on ${port}`))
}
