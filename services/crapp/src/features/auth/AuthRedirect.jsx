import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapState = ({ auth }) => ({
    redirectTo: auth.accessDenied ? '/error' : null,
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
