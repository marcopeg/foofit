/**
 * Wrapper component, guarantees that the children component
 * gets rendered only in case there is a valid login session.
 * 
 * It handled also the case that a server request ends up in
 * an "accessDenied" response. This particular behaviour is
 * achieved directly by the "lib/graphql" layer that is capable
 * of dispatching the "reducer.SET_ACCESS_DENIED" action.
 * 
 * Any component that is wrapper with AuthRedirect will never
 * be rendered in case something goes wrong with the authentication.
 * 
 * -- SSR compatible --
 * In the server side it will cause a normal header based redirect.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapState = ({ auth }) => ({
    // redirectTo: (!auth.hasLogin || auth.accessDenied)
    redirectTo: auth.accessDenied
        ? auth.redirectOnError
        : null,
})

const AuthRedirect = ({ redirectTo, children }) =>
    redirectTo
        ? <Redirect to={redirectTo} />
        : children

AuthRedirect.propTypes = {
    redirectTo: PropTypes.string,
    children: PropTypes.any,
}

AuthRedirect.defaultProps = {
    redirectTo: null,
    children: null,
}

export default connect(mapState)(AuthRedirect)
