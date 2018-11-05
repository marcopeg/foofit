
import { runQuery } from 'lib/graphql'
import { helloQuery } from './queries'

export const downloadMyTraining = () => async (dispatch) => {
    console.log('download my training')
    const res = await dispatch(runQuery(helloQuery))
    console.log(res)
}

export const start = () => (dispatch) => {
    dispatch(downloadMyTraining())
}
