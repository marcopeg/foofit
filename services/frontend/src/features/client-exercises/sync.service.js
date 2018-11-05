
import { runQuery } from 'lib/graphql'

export const downloadMyTraining = () => async (dispatch) => {
    console.log('download my training')
    const res = await dispatch(runQuery('query hello { hello }'))
    console.log(res)
}

export const start = () => (dispatch) => {
    dispatch(downloadMyTraining())
}
