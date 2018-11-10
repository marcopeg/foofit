
import { getModel } from 'services/postgres'

const sequelizeError = err => err.detail ? new Error(err.detail) : err

export const signup = async (email, passw) => {
    try {
        const md = await getModel('Account').create({ email, passw })
        return md.dataValues
    } catch (err) {
        throw sequelizeError(err)
    }
}

export const login = async (email, passw) => {
    try {
        const md = await getModel('Account').findLogin(email, passw)
        if (!md) throw new Error('user not found or wrong email')

        return md.dataValues
    } catch (err) {
        throw sequelizeError(err)
    }
}
