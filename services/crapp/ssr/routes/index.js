// import path from 'path'
import express from 'express'
import { createSSRRouter } from 'create-react-app-ssr'
import { graphQLHandler } from './graphql'
import { getCacheKey } from 'ssr/features/auth'

export const createAppRouter = () => {
    const router = express.Router()

    router.use('/api', graphQLHandler)
    router.use(createSSRRouter({ getCacheKey }))
    // router.get('/', (req, res) => res.send('hello'))

    // serve static files
    // router.use(express.static(path.resolve(__dirname, '..', '..', 'build')))
    // router.use(express.static(path.resolve(__dirname, '..', '..', 'build')))
    // router.use('*', express.static(path.resolve(__dirname, '..', '..', 'build')))

    return router
}
