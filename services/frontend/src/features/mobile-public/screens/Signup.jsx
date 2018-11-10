/* eslint react/prefer-stateless-function: off */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MobilePage, { Input, Button, Loading, Text, mixins } from 'features/mobile/MobilePage'
import { FaAngleRight } from 'react-icons/fa'
import { signup } from '../signup.service'

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
    signup: (email, passw) => dispatch(signup(email, passw)),
})

class Signup extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isLoading: false,
            email: '',
            passw: '',
        }
    }
    onInputChange = field => evt => this.setState({
        [field]: evt.target.value,
    })

    onSubmit = async () => {
        this.setState({ isLoading: true })
        const res = await this.props.signup(this.state.email, this.state.passw)
        this.setState({ isLoading: false })
        console.log(res)
    }

    render () {
        return (
            <MobilePage>
                <MobilePage.Body withPadding flex>
                    <div style={styles.wrapper}>
                        <div style={styles.copy}>
                            <Text style={{ marginBottom: 50 }}>{'JOIN THE COMMUNITY'}</Text>
                            <Input
                                block
                                placeholder={'your@email.com'}
                                value={this.state.email}
                                onChange={this.onInputChange('email')}
                                style={{ marginBottom: 25 }}
                            />
                            <Input
                                block
                                type={'password'}
                                placeholder={'password'}
                                value={this.state.passw}
                                onChange={this.onInputChange('passw')}
                                style={{
                                    marginBottom: 25,
                                    opacity: this.state.email ? 1 : 0,
                                    transition: 'opacity 0.5s ease',
                                }}
                            />
                            <div style={{
                                marginTop: 15,
                                opacity: (this.state.email && this.state.passw) ? 1 : 0,
                                transition: 'opacity 0.5s ease',
                                textAlign: 'right',
                            }}>
                                {this.state.isLoading ? (
                                    <Loading />
                                ) : (
                                    <Button
                                        onClick={this.onSubmit}
                                        children={(
                                            <div style={{ ...mixins.flexCentered }}>
                                                {'next'}
                                                <FaAngleRight />
                                            </div>
                                        )}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </MobilePage.Body>
            </MobilePage>
        )
    }
}

Signup.propTypes = {
    signup: PropTypes.func.isRequired,
}

export default connect(mapState, mapDispatch)(Signup)
