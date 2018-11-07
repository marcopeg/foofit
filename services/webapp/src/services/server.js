import path from 'path'
import express from 'express'
import compression from 'compression'
import cors from 'cors'
import { logInfo } from 'services/logger'
import { createAppRouter } from 'routes/index'

const app = express()

export const init = () => {
    logInfo('init server')

    if (process.env.NODE_ENV === 'development') {
        logInfo('[server] CORS are enabled in development')
        app.use(cors({
            origin: 'http://localhost:3000',
            credentials: true,
        }))
    }

    app.use(compression())
    app.use(createAppRouter())

    // serve static files
    app.use(express.static(path.resolve(__dirname, '..', '..', 'build-client')))
    app.use('*', express.static(path.resolve(__dirname, '..', '..', 'build-client')))
}

export const start = ({ port }) => {
    logInfo('start server')
    app.listen(port, () => logInfo(`[server] express is running on ${port}`))
}
