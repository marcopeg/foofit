
import { runQuery } from 'lib/graphql'
import getProgramsList from './queries/get-programs-list'

export const updatePrograms = () => async (dispatch) => {
    console.log('download my training')
    const res = await dispatch(runQuery(getProgramsList))
    console.log(res)
}
