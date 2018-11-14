/**
 * Development Entry Point
 * =======================
 *
 * Automatically transpile js on the fly, cool do work with
 * but not the most efficient way to run it.
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!! DO NOT DEPLOY THIS TO PRODUCTION       !!!
 * !!! USE THE PRODUCTION ENTRY POINT INSTEAD !!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 */

require('@babel/polyfill')
require('@babel/register')

require('./ssr/boot').default().catch((err) => {
    console.log('*** BOOT: Fatal Error')
    console.log(err)
})
