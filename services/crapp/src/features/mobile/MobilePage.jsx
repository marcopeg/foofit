import React from 'react'
import { connect } from 'react-redux'
import MobilePage from 'components/MobilePage'

const mapState = state => ({
    theme: state.account.theme,
})

const ThemedMobilePage = (props) => (
    <MobilePage {...props} />
)

ThemedMobilePage.Header = MobilePage.Header
ThemedMobilePage.Footer = MobilePage.Footer
ThemedMobilePage.Body = MobilePage.Body

export * from 'components/MobilePage'
export default connect(mapState)(ThemedMobilePage)
