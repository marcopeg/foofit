/**
 * Logging Library Interface
 * =========================
 *
 * one day this will be connected with Winston and possibly
 * push data into S3 or some fancy log collector system.
 *
 */

const logLevels = {
    ERROR: 0,
    INFO: 1,
    VERBOSE: 2,
    DEBUG: 3,
}

// init time cache for enviroment dependent configuration
const cache = {}

const args2string = (...args) => args
    .map(a => typeof a === 'string' ? a : JSON.stringify(a))
    .join(', ')

const getDefaultLogLevel = () => {
    if (process.env.NODE_ENV === 'test') return logLevels.DEBUG
    if (process.env.NODE_ENV === 'development') return logLevels.INFO
    return logLevels.ERROR
}

const getLogLevel = () => {
    const defaultLogLevel = getDefaultLogLevel()
    const logLevel = (process.env.LOG_LEVEL || '').toUpperCase()
    const logLevelNum = parseInt(logLevel, 10)

    if (String(logLevelNum) === logLevel) return logLevelNum
    if (logLevels[logLevel] !== undefined) return logLevels[logLevel]
    return defaultLogLevel
}

export const init = () => {
    cache.logLevel = getLogLevel()
    Object.keys(logLevels).forEach((key) => {
        cache[logLevels[key]] = cache.logLevel < logLevels[key]
    })
}

export const logInfo = (...args) => {
    if (cache[logLevels.INFO]) return
    console.log(`[info] ${args2string(...args)}`)
}

export const logVerbose = (...args) => {
    if (cache[logLevels.VERBOSE]) return
    console.log(`[verbose] ${args2string(...args)}`)
}

export const logDebug = (...args) => {
    if (cache[logLevels.DEBUG]) return
    console.log(`[debug] ${args2string(...args)}`)
}

export const logError = (...args) => {
    if (cache[logLevels.ERROR]) return
    console.log(`[error] ${args2string(...args)}`)
}
