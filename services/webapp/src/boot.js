import * as config from '@marcopeg/utils/lib/config'
import * as envService from 'services/env'
import * as loggerService from 'services/logger'
import * as hashService from 'services/hash'
import * as jwtService from 'services/jwt'
import * as postgresService from 'services/postgres'
import * as serverService from 'services/server'
import models from 'models'

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
            loginDuration: String(config.get('LOGIN_DURATION')),
        }),
    ])

    await postgresService.start({
        maxAttempts: Number(config.get('PG_MAX_CONN_ATTEMPTS')),
        attemptDelay: Number(config.get('PG_CONN_ATTEMPTS_DELAY')),
        models,
    })

    await serverService.start({
        port: config.get('SERVER_PORT'),
    })
}

export default boot
