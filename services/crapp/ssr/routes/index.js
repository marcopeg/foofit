
import express from 'express'
import { createSSRRouter } from 'create-react-app-ssr/lib/create-ssr-router'
import { graphQLHandler } from './graphql'

export const createAppRouter = (settings) => {
    const router = express.Router()

    router.use('/api', graphQLHandler)
    router.use(createSSRRouter(settings))
    // router.get('/', (req, res) => res.send('hello'))

    return router
}
