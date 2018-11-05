/**
 * Dispatchable interface to run a GraphQL query with variables
 * (just pass a query with it's own optional variables)
 */

import { postJSON } from 'lib/request'

export const runQuery = (query = null, variables = {}, options = {}) => async () => {
    if (!query) {
        throw new Error('[graphql] please provide a query')
    }

    const { debug, ...fetchSettingsOptions } = options
    const endpoint = options.endpoint || 'http://localhost:8080/api'
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
        result = await postJSON(endpoint, {
            query,
            variables,
        }, fetchSettings)
    } catch (err) {
        const error = new Error(`[graphql] failed to run query: ${query} - ${err.message}`)
        error.requestError = err
        throw error
    }

    if (result.errors) {
        const error = new Error(result.errors[0])
        error.graphQLErrors = result.errors
        error.graphQLResponse = result
        throw error
    }

    return result.data
}
