import { getModel } from 'services/postgres'

export const getPrograms = (profileId, lastUpdate) =>
    getModel('SnapProgram').getListByProfileId(profileId, lastUpdate)
