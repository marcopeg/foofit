
import { runQuery } from 'lib/graphql'
import getProgramsList from './queries/get-programs-list'
import { setIsLoading, setListItems } from './programs.reducer'

export const updatePrograms = () => async (dispatch) => {
    try {
        dispatch(setIsLoading(true))
        const res = await dispatch(runQuery(getProgramsList))
        dispatch(setListItems(res.session.getProgramsList))
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(setIsLoading(false))
    }
}
