import pause from '@marcopeg/utils/lib/pause'
import { runQuery } from 'lib/graphql'
import signupQuery from './queries/signup.query'

export const signup = (email, passw) => async (dispatch) => {
    try {
        console.log('signup', email, passw)
        await pause(1000)
        const res = await dispatch(runQuery(signupQuery, { email, passw }))
        console.log(res)
    } catch (err) {
        console.log(err)
        return {
            success: false,
            errorMsg: err.message,
        }
    }
}
