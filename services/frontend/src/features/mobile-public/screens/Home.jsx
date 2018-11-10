import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MobilePage, { Button, Space, Divider, Title, Text, mixins } from 'features/mobile/MobilePage'

const styles = {
    wrapper: {
        ...mixins.flexCentered,
        flex: 1,
        flexDirection: 'column',
        marginBottom: '50%',
    },
    copy: {
        textAlign: 'center',
    },
}

const mapState = () => ({})

const mapDispatch = (dispatch, { history }) => ({
    login: () => history.push('/login'),
    signup: () => history.push('/signup'),
})

const Home = ({ login, signup }) => (
    <MobilePage>
        <MobilePage.Body withPadding flex>
            <div style={styles.wrapper}>
                <div style={styles.copy}>
                    <Title>FooFit</Title>
                    <Text>
                        welcome to the greatest<br />
                        shared training community
                    </Text>
                </div>
                <Space />
                <Divider />
                <Space />
                <Button
                    block
                    onClick={signup}
                    children={'JOIN THE COMMUNITY'}
                />
                <Space />
                <Button
                    block
                    type="secondary"
                    onClick={login}
                    children={'login'}
                />
            </div>
        </MobilePage.Body>
    </MobilePage>
)

Home.propTypes = {
    login: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
}

export default connect(mapState, mapDispatch)(Home)
