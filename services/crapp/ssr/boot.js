import path from 'path'
import * as config from '@marcopeg/utils/lib/config'
import * as envService from 'ssr/services/env'
import * as loggerService from 'ssr/services/logger'
import * as hashService from 'ssr/services/hash'
import * as jwtService from 'ssr/services/jwt'
import * as postgresService from 'ssr/services/postgres'
import * as serverService from 'ssr/services/server'
import * as testService from 'ssr/services/test'
import models from 'ssr/models'
import features from 'ssr/features'

require('es6-promise').polyfill();
require('isomorphic-fetch');

const boot = async () => {
    await envService.init()
    await loggerService.init()

    await Promise.all([
        hashService.init({
            rounds: Number(config.get('BCRYPT_ROUNDS')),
        }),
        jwtService.init({
            secret: String(config.get('JWT_SECRET')),
            duration: String(config.get('JWT_DURATION')),
        }),
        postgresService.init({
            host: config.get('PG_HOST'),
            port: config.get('PG_PORT'),
            database: config.get('PG_DATABASE'),
            username: config.get('PG_USERNAME'),
            password: config.get('PG_PASSWORD'),
        }),
        serverService.init({
            nodeEnv: config.get('NODE_ENV'),
            loginDuration: String(config.get('LOGIN_DURATION')),
            ssrEnabled: config.get('SSR_ENABLED'),
            ssrTimeout: Number(config.get('SSR_TIMEOUT')),
            ssrRoot: path.join(__dirname, '..', config.get('SSR_ROOT')),
            ssrBuild: path.join(__dirname, '..', config.get('SSR_BUILD')),
            ssrDisableJs: config.get('SSR_DISABLE_JS'),
            ssrUseWebpackJs: config.get('SSR_USE_WEBPACK_JS'),
            ssrBlacklist: config.get('SSR_BLACKLIST'),
            ssrPort: config.get('SERVER_PORT'),
        }),
        testService.init({
            isEnabled: [ 'development', 'test' ].indexOf(process.env.NODE_ENV) !== -1,
            token: config.get('GRAPHQL_TEST_TOKEN'),
        }),
    ])

    // run features "init" hook
    for (const feature of features) {
        if (feature.init) await feature.init()
    }

    await postgresService.start({
        maxAttempts: Number(config.get('PG_MAX_CONN_ATTEMPTS')),
        attemptDelay: Number(config.get('PG_CONN_ATTEMPTS_DELAY')),
        models,
    })

    // run features "start" hook
    for (const feature of features) {
        if (feature.start) await feature.start()
    }

    await serverService.start({
        port: config.get('SERVER_PORT'),
    })

    // run features "started" hook
    for (const feature of features) {
        if (feature.started) await feature.started()
    }
}

export default boot
