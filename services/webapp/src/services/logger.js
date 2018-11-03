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

const getLogLevel = () => {
    const logLevel = (process.env.LOG_LEVEL || '').toUpperCase()
    const logLevelNum = parseInt(logLevel, 10)

    if (String(logLevelNum) === logLevel) return logLevelNum
    if (logLevels[logLevel] !== undefined) return logLevels[logLevel]

    // apply defaults
    if (process.env.NODE_ENV === 'test') return logLevels.DEBUG
    if (process.env.NODE_ENV === 'development') return logLevels.INFO
    return logLevels.ERROR
}

const log = (level, prefix) => (...args) => {
    if (cache[level]) return
    console.log(`[${prefix}] ${args2string(...args)}`)
}

export const init = () => {
    cache.logLevel = getLogLevel()
    Object.keys(logLevels).forEach((key) => {
        cache[logLevels[key]] = cache.logLevel < logLevels[key]
    })
}

export const logInfo = log(logLevels.INFO, 'info')
export const logVerbose = log(logLevels.VERBOSE, 'verbose')
export const logDebug = log(logLevels.DEBUG, 'debug')
export const logError = log(logLevels.ERROR, 'error')
