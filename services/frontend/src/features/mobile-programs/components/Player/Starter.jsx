/* eslint react/prefer-stateless-function: off */

import React from 'react'
import PropTypes from 'prop-types'
import { flexCentered } from 'app/mixins'
import { FaPlay } from 'react-icons/fa'

const lines = [
    'do not exercise while driving',
    'you do this, then we go for a beer!',
    'this is going to be awesome!',
]

const styles = {
    wrapper: {
        ...flexCentered,
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        left: 0,
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: '1px solid black',
        transform: 'translate3d(0, 0, 0)',
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
        paddingLeft: 40,
        paddingRight: 20,
        // background: '#1e8eff',
    },
}

const getWrapperStyle = ({ width, height, isVisible }) => {
    const style = {
        ...styles.wrapper,
        width,
        height,
    }

    if (!isVisible) {
        style.transform = `translate3d(0, ${height}px, 0)`
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

class Starter extends React.PureComponent {
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
        const { start, ...props } = this.props
        return (
            <div style={getWrapperStyle(props)}>
                <div style={styles.comment}>
                    {this.state.line}
                </div>
                <div style={styles.divider} />
                <div
                    onClick={start}
                    style={getPlayStyle(this.state.isBig)}
                >
                    <FaPlay size={80} />
                </div>
            </div>
        )
    }
}

Starter.propTypes = {
    start: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
}

export default Starter
