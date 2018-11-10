/* eslint react/prefer-stateless-function: off */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MobilePage, { Input, Button, Divider, Text, mixins } from 'features/mobile/MobilePage'
import { FaAngleRight } from 'react-icons/fa'

const styles = {
    wrapper: {
        ...mixins.flexCentered,
        flex: 1,
        flexDirection: 'column',
        marginBottom: '50%',
    },
    copy: {
        width: '70%',
        textAlign: 'center',
    },
}

const mapState = () => ({})

const mapDispatch = (dispatch, { history }) => ({
    verifyEmail: () => console.log('verify email'),
    confirmSignup: () => console.log('confirm signup'),
})

class Signup extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            value: this.props.initialValue,
        }
    }
    onInputChange = (evt) => this.setState({
        value: evt.target.value,
    })

    render () {
        return (
            <MobilePage>
                <MobilePage.Body withPadding flex>
                    <div style={styles.wrapper}>
                        <div style={styles.copy}>
                            <Text>{'JOIN THE COMMUNITY'}</Text>
                            <Divider width={'30%'} style={{ marginTop: 25, marginBottom: 25 }} />
                            <Input
                                block
                                centered
                                placeholder={'your@email.com'}
                                value={this.state.value}
                                onChange={this.onInputChange}
                            />
                            {this.state.value ? (
                                <div style={{ marginTop: 15 }}>
                                    <Button
                                        block
                                        type={'link'}
                                        children={<FaAngleRight />}
                                    />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </MobilePage.Body>
            </MobilePage>
        )
    }
}

Signup.propTypes = {
    initialValue: PropTypes.string,
    verifyEmail: PropTypes.func.isRequired,
    confirmSignup: PropTypes.func.isRequired,
}

Signup.defaultProps = {
    initialValue: '',
}

export default connect(mapState, mapDispatch)(Signup)
