import createHistory from 'history/createBrowserHistory'

// History singleton setup in development mode
// prevents multiple store instances when accepting HMR data
// by saving store and history into the global scope
let hotHistory
if (window && process.env.NODE_ENV === 'development' && !process.env.SSR) {
    if (!window.__patchReduxHotLoadingHistory__) {
        hotHistory = createHistory()
        window.__patchReduxHotLoadingHistory__ = { hotHistory }
    }
    if (module.hot) {
        hotHistory = window.__patchReduxHotLoadingHistory__.hotHistory
    }

// production or SSR way:
// it is important that both history and store are created with
// per-request scope so to do not mess with concurrent server side rendering!
} else {
    hotHistory = createHistory()
}

export default hotHistory
