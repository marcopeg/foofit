
import { runQuery } from 'lib/graphql'
import getProgramsList from './queries/get-programs-list'
import { setIsLoading, setLoadingError, setListItems } from './programs.reducer'

export const updatePrograms = () => async (dispatch) => {
    try {
        console.log('>> update programs')
        dispatch(setIsLoading(true))
        const res = await dispatch(runQuery(getProgramsList))
        // console.log('****', res.session.getProgramsList)
        dispatch(setListItems(res.session.getProgramsList))
    } catch (err) {
        console.log('Fetch Programs Error', err.message)
        dispatch(setLoadingError(err))
    } finally {
        dispatch(setIsLoading(false))
    }
}

export const loadPrograms = () => (dispatch, getState) => {
    const { programs } = getState()
    if (!programs.items.length) {
        return dispatch(updatePrograms())
    }
}
