import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MobilePage, { Title, Text, Space, mixins } from 'features/mobile/MobilePage'

const styles = {
    wrapper: {
        ...mixins.flexCentered,
        flex: 1,
        flexDirection: 'column',
        paddingBottom: '50%',
        paddingLeft: '15%',
        paddingRight: '15%',
        textAlign: 'center',
        backgroundColor: '#cc0000',
    },
}

const mapState = () => ({})

const mapDispatch = (dispatch, { history }) => ({
    login: () => history.push('/login'),
    goHome: () => history.push('/'),
})

const ErrorScreen = ({ login, goHome }) => (
    <MobilePage>
        <MobilePage.Body flex>
            <div style={styles.wrapper}>
                <Title>Ooooops!</Title>
                <Text>something went terribly wrong, wouldn't you agree?</Text>
                <Space />
                <Space />
                <div style={{ textAlign: 'left' }}>
                    <Text onClick={login}>-> go to login page</Text>
                    <Text onClick={goHome}>-> go to home page</Text>
                </div>
            </div>
        </MobilePage.Body>
    </MobilePage>
)

ErrorScreen.propTypes = {
    login: PropTypes.func.isRequired,
    goHome: PropTypes.func.isRequired,
}

export default connect(mapState, mapDispatch)(ErrorScreen)
