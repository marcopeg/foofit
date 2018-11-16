import jwtService from 'ssr/services/jwt'
import { getModel, registerModel } from 'ssr/services/postgres'

const COOKIE_NAME = 'auth::login'
const sequelizeError = err => err.detail ? new Error(err.detail) : err

export const start = () => Promise.all([
    registerModel(require('./models/account.model')),
])

export const signup = async (req, res, email, passw) => {
    try {
        const md = await getModel('Account').create({ email, passw })
        return md.dataValues
    } catch (err) {
        throw sequelizeError(err)
    }
}

export const login = async (req, res, email, passw) => {
    try {
        const account = await getModel('Account').findLogin(email, passw)
        if (!account) throw new Error('user not found or wrong email')

        const jwt = await jwtService.sign({ id: account.id })
        res.setAppCookie(COOKIE_NAME, jwt)

        return account.dataValues
    } catch (err) {
        throw sequelizeError(err)
    }
}

export const logout = (req, res) => {
    res.deleteAppCookie(COOKIE_NAME)
    return 'ok'
}

export const getSession = async (req, res) => {
    try {
        const jwt = req.getAppCookie(COOKIE_NAME)
        const data = await jwtService.verify(jwt)
        return data.payload
    } catch (err) {
        throw new Error('403')
    }
}
