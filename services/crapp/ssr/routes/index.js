
import express from 'express'
import { graphQLHandler } from './graphql'

export const createAppRouter = (settings) => {
    const router = express.Router()

    router.use('/api', graphQLHandler)
    router.get('/', (req, res) => res.send('hello'))

    return router
}
