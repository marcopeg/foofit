import { logInfo, logError } from 'services/logger'
// import express from 'express'


export const init = () => {
    logInfo('init server', 'foo', 123, true, [1234], { a: 1, b: 'v' })
    logInfo('buuu')
    logInfo('hahahah')
}

export const start = () => {
    logError('start server')
}
