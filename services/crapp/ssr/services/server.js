import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import uuid from 'uuid/v1'
import millisecond from 'millisecond'
import { logInfo } from 'ssr/services/logger'
import { createAppRouter } from 'ssr/routes/index'

const app = express()

export const init = ({ loginDuration, ...settings }) => {
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
            exposedHeaders: 'x-device-id',
        }))
    }

    // COOKIES
    // allow routes and controllers to set a cookie
    app.use(cookieParser())
    app.use((req, res, next) => {
        const options = {
            httpOnly: true,
            secure: !isDev,
            maxAge: millisecond(loginDuration),
        }

        // @TODO: prefix from env variable
        const getName = name => `foofit::${name}`

        // Set cookie
        res.setAppCookie = (name, content) => {
            res.cookie(getName(name), content, options)
        }

        // Delete cookie
        res.deleteAppCookie = name => res.clearCookie(getName(name))

        // Retrieve cookoe
        req.getAppCookie = name => req.cookies[getName(name)]

        next()
    })

    // DEVICE ID
    app.use((req, res, next) => {
        req.xDeviceID = req.get('x-device-id') || uuid()
        res.set('x-device-id', req.xDeviceID)
        next()
    })

    app.use(compression())
    app.use(helmet())
    app.use(createAppRouter(settings))
}

export const start = ({ port }) => {
    logInfo('[server] start server')
    app.listen(port, () => logInfo(`[server] express is running on ${port}`))
}
