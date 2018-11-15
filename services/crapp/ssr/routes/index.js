
import express from 'express'
// const { createSSRRouter } = require('lib/create-react-app-ssr/src/create-ssr-router')
const { createSSRRouter } = require('create-react-app-ssr/lib/create-ssr-router')
import { graphQLHandler } from './graphql'

export const createAppRouter = (settings) => {
    const router = express.Router()

    router.use('/api', graphQLHandler)
    // router.get('/', (req, res) => res.send('hello'))

    // ssr - serve client app
    // create-react-app-ssr
    router.use(createSSRRouter(settings))

    return router
}
