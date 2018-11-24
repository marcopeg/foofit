import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MobilePage from 'components/MobilePage'
import { AuthRedirect } from 'features/auth'

const mapState = state => ({
    theme: state.account.theme,
})

const ThemedMobilePage = ({ withAuth, ...props }) => (
    withAuth
        ? (
            <AuthRedirect>
                <MobilePage {...props} />
            </AuthRedirect>
        )
        : <MobilePage {...props} />
)

ThemedMobilePage.propTypes = {
    withAuth: PropTypes.bool,
}

ThemedMobilePage.defaultProps = {
    withAuth: false,
}

ThemedMobilePage.Header = MobilePage.Header
ThemedMobilePage.Footer = MobilePage.Footer
ThemedMobilePage.Body = MobilePage.Body

export * from 'components/MobilePage'
export default connect(mapState)(ThemedMobilePage)
