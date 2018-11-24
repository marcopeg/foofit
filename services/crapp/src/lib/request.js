/**
 * Exposes a simple way to run server requests and keeps automatically
 * track of a "device-id" information that is persisted in local storage.
 *
 */

// import localStorage from './local-storage'

export const wrappedFetch = async (url, config = {}) => {
    // const deviceId = localStorage.getItem('device::id')
    const headers = {
        ...(config.headers || {}),
        // ...(deviceId ? { 'x-device-id': deviceId } : {}),
    }

    try {
        const res = await fetch(url, { ...config, headers })
        // const deviceIdHeader = res.headers.get('x-device-id')
        // if (deviceId !== deviceIdHeader) localStorage.setItem('device::id', deviceIdHeader)

        return res
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
