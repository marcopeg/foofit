
export const wrappedFetch = async (url, config = {}) => {
    try {
        return fetch(url, config)
    } catch (err) {
        throw err
    }
}

export const postJSON = async (url, data = {}, config = {}) => {
    try {
        const headers = Object.assign({}, config.headers || {}, {
            'content-type': 'application/json',
        })
        const options = Object.assign({}, config, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        })
        const res = await wrappedFetch(url, options)

        // status code error handling
        if (res.status !== 200) {
            let errMsg
            try {
                errMsg = await res.text()
            } catch (err) {
                errMsg = res.statusText
            }

            const error = new Error(`${res.status} - ${errMsg}`)
            error.response = res
            throw error
        }

        return await res.json()
    } catch (err) {
        throw err
    }
}
