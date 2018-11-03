
import * as envService from 'services/env'
import * as loggerService from 'services/logger'
import * as serverService from 'services/server'

const boot = async () => {
    await envService.init()
    await loggerService.init()
    await serverService.init()
    await serverService.start()
}

export default boot
