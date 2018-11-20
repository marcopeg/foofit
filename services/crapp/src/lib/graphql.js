/**
 * Dispatchable interface to run a GraphQL query with variables
 * (just pass a query with it's own optional variables)
 */

import { postJSON } from 'lib/request'

export const runQuery = (query = null, variables = {}, options = {}) => async (dispatch, getState) => {
    if (!query) {
        throw new Error('[graphql] please provide a query')
    }

    const { ssr } = getState()
    const { debug, ...fetchSettingsOptions } = options
    // const endpoint = options.endpoint || `${getState().app.backend}api`
    const endpoint = options.endpoint || ssr.getApiUrl('')
    console.log('endpoint', endpoint)
    let result = null

    const fetchSettings = {
        credentials: 'include',
        ...fetchSettingsOptions,
    }

    if (debug) {
        console.log('>>>>>>>>>>>> GRAPHQL')
        console.log(endpoint)
        console.log(query)
        console.log(variables)
        console.log(fetchSettings)
        console.log(JSON.stringify(variables))
        console.log('<<<<<<<<<<< GRAPHQL')
    }

    try {
        result = await ssr.await(postJSON(endpoint, {
            query,
            variables,
        }, fetchSettings))
    } catch (err) {
        const error = new Error(`[graphql] failed to run query: ${query} - ${err.message}`)
        error.requestError = err
        throw error
    }

    if (result.errors) {
        const error = new Error(result.errors[0].message)
        error.graphQLErrors = result.errors
        error.graphQLResponse = result

        // detect an authorization problem and dispatch an action
        // that should kick out the user
        if (result.errors.find(err => err.message === '403')) {
            dispatch({ type: '@graphql::403', payload: {
                code: 403,
                message: 'access denied',
                type: 'graphql',
                data: result,
            } })
        }

        throw error
    }

    return result.data
}
