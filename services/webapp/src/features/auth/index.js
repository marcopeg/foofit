
import { sign as signJwt } from 'services/jwt'
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

export const login = async (req, res, email, passw) => {
    try {
        const account = await getModel('Account').findLogin(email, passw)
        if (!account) throw new Error('user not found or wrong email')

        const jwt = await signJwt({
            id: account.id,
        })

        console.log(jwt)

        res.setAppCookie('auth::login', jwt)

        return account.dataValues
    } catch (err) {
        throw sequelizeError(err)
    }
}

export const logout = (req, res) => {
    res.deleteAppCookie('auth::login')
    return 'ok'
}

