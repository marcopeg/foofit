
import * as serverService from 'services/server'

const boot = async () => {
    serverService.init()
    serverService.start()
}

export default boot
