import { getModel } from 'ssr/services/postgres'

export const getPrograms = (profileId, lastUpdate) =>
    getModel('SnapProgram').getListByProfileId(profileId, lastUpdate)

export const init = () => {
    console.log('init PROFILE')
}

export const start = () => {
    console.log('start PROFILE')
}
