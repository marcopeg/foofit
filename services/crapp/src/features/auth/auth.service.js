import { runQuery } from 'lib/graphql'
import localStorage from 'lib/local-storage'
import signupMutation from './queries/signup.mutation'
import loginMutation from './queries/login.mutation'
import { setLogin } from './auth.reducer'

// removes all the current session informations
const cleanSession = () => (dispatch) => {
    dispatch({ type: '@reset' })
    localStorage.removeItem('auth::session')
}

const persistSession = session => (dispatch) => {
    dispatch(cleanSession())
    dispatch(setLogin(session))
    localStorage.setItem('auth::session', session)
}

export const signup = (email, passw) => async (dispatch) => {
    try {
        const res = await dispatch(runQuery(signupMutation, { email, passw }))
        const session = res.signup

        dispatch(persistSession(session))

        return {
            success: 'true',
            session,
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
        const session = res.login

        dispatch(persistSession(session))

        return {
            success: 'true',
            session,
        }
    } catch (err) {
        return {
            success: false,
            errorMsg: err.message,
        }
    }
}

export const logout = () => (dispatch) => dispatch(cleanSession())

export const start = () => async (dispatch, getState) => {
    console.log('GET THE STUFF')
    const res = await dispatch(runQuery(`query foo { session { id } }`))
    console.log(res)
}
