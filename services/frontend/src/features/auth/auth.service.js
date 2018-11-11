import { runQuery } from 'lib/graphql'
import signupMutation from './queries/signup.mutation'
import loginMutation from './queries/login.mutation'
import { setLogin } from './auth.reducer'

export const signup = (email, passw) => async (dispatch) => {
    try {
        const res = await dispatch(runQuery(signupMutation, { email, passw }))
        dispatch(setLogin(res.signup))
        return {
            success: 'true',
            user: res.signup,
        }
    } catch (err) {
        return {
            success: false,
            errorMsg: err.message,
        }
    }
}

export const login = (email, passw) => async (dispatch) => {
    try {
        const res = await dispatch(runQuery(loginMutation, { email, passw }))
        dispatch(setLogin(res.login))
        return {
            success: 'true',
            user: res.login,
        }
    } catch (err) {
        console.log(err)
        return {
            success: false,
            errorMsg: err.message,
        }
    }
}