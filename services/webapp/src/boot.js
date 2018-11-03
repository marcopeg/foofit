
import * as config from '@marcopeg/utils/lib/config'
import * as envService from 'services/env'
import * as loggerService from 'services/logger'
import * as serverService from 'services/server'

const boot = async () => {
    await envService.init()
    await loggerService.init()
    await serverService.init()
    await serverService.start({
        port: config.get('SERVER_PORT'),
    })
}

export default boot
