import express from 'express'
import { serveAppStatic } from './serve-app-static.middleware'
import { serveAppSSR } from './serve-app-ssr.middleware'
import { serveBuild } from './serve-build.middleware'

export const createSSRRouter = (settings) => {
    const router = express.Router()

    // serve client app
    let serveApp = settings.ssrEnabled === 'yes'
        ? serveAppSSR
        : serveAppStatic

    // Optional blacklist out from ssr
    if (settings.ssrEnabled === 'yes' && settings.ssrBlacklist) {
        const rules = (Array.isArray(settings.ssrBlacklist)
            ? settings.ssrBlacklist
            : settings.ssrBlacklist.split(',')
        )
        rules.forEach(rule => router.get(rule, serveAppStatic(settings)))
    }

    // Default routes handling
    router.get('/', serveApp(settings))
    router.use(serveBuild(settings))
    router.get('*', serveApp(settings))

    return router
}