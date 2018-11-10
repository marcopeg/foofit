import { runQuery } from 'lib/graphql'
import signupQuery from './queries/signup.query'

export const signup = (email, passw) => async (dispatch) => {
    try {
        await dispatch(runQuery(signupQuery, { email, passw }))
        return { success: 'true' }
    } catch (err) {
        return {
            success: false,
            errorMsg: err.message,
        }
    }
}

export const login = (email, passw) => async (dispatch) => {
    try {
        await dispatch(runQuery(signupQuery, { email, passw }))
        return { success: 'true' }
    } catch (err) {
        return {
            success: false,
            errorMsg: err.message,
        }
    }
}
