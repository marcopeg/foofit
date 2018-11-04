import * as config from '@marcopeg/utils/lib/config'
import * as envService from 'services/env'
import * as loggerService from 'services/logger'
import * as postgresService from 'services/postgres'
import * as serverService from 'services/server'
import models from 'models'

const boot = async () => {
    await envService.init()
    await loggerService.init()

    await Promise.all([
        postgresService.init({
            database: config.get('PG_DATABASE'),
            username: config.get('PG_USERNAME'),
            password: config.get('PG_PASSWORD'),
        }),
        serverService.init(),
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
