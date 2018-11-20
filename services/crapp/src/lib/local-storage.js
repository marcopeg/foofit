/**
 * Interface to the localStorage for the device
 */

// @TODO: use environment variable with the app name
const getKeyName = key => `foofit::${key}`

export const setItem = (key, value) => localStorage.setItem(getKeyName(key), JSON.stringify(value))

export const getItem = key => JSON.parse(localStorage.getItem(getKeyName(key)))

export const removeItem = key => localStorage.removeItem(getKeyName(key))

export default { setItem, getItem, removeItem }
