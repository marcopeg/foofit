/* eslint react/prefer-stateless-function: off */

import React from 'react'
import PropTypes from 'prop-types'
import { flexCentered } from 'app/mixins'
import { Icon } from 'components/MobilePage'

const lines = [
    'that\'s the stuff!',
    'oh yeah, baby!',
    'good job, and see you tomorrow!',
    'and it\'s done!',
    'you did a good job!',
    'uh, now go and tell your girlfriend your abs need a treat ;-)',
]

const styles = {
    wrapper: {
        ...flexCentered,
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        left: 0,
        color: '#fff',
        backgroundColor: 'rgba(29, 69, 109, 0.9)',
        border: '1px solid black',
        transform: 'translate3d(0, 100%, 0)',
        transition: 'transform 0.3s ease-in',
    },
    comment: {
        maxWidth: '70%',
        fontWeight: 'bold',
        fontSize: 'monospace',
        lineHeight: '2em',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },
    divider: {
        borderTop: '1px solid white',
        width: '25%',
        marginTop: 50,
        paddingBottom: 50,
    },
    play: {
        borderTop: '1px solid #fff',
        borderBottom: '1px solid #fff',
        borderLeft: '1px solid #fff',
        borderRight: '1px solid #fff',
        borderRadius: '50%',
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
    },
}

const getWrapperStyle = ({ width, height, isVisible }) => {
    const style = {
        ...styles.wrapper,
        width,
        height,
    }

    if (isVisible) {
        style.transform = 'translate3d(0, 0, 0)'
    }

    return style
}

const getPlayStyle = (isBig) => {
    const style = {
        ...styles.play,
        transform: 'scale(1)',
        transition: 'transform 1s ease',
    }

    if (isBig) {
        style.transform = 'scale(1.1)'
    }

    return style
}

class Finisher extends React.PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            isBig: true,
            line: lines[Math.floor(Math.random() * lines.length)],
        }
    }

    componentDidMount () {
        this.interval = setInterval(() => this.setState({
            isBig: !this.state.isBig,
        }), 1000)
    }

    componentWillUnmount () {
        clearInterval(this.interval)
    }

    render () {
        const { finish, ...props } = this.props
        return (
            <div style={getWrapperStyle(props)}>
                <div style={styles.comment}>
                    {this.state.line}
                </div>
                <div style={styles.divider} />
                <div
                    onClick={finish}
                    style={getPlayStyle(this.state.isBig)}
                >
                    <Icon name={'Check'} size={80} />
                </div>
            </div>
        )
    }
}

Finisher.propTypes = {
    finish: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
}

export default Finisher
