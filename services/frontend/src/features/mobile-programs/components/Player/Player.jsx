/* eslint react/prefer-stateless-function: off */
import React from 'react'
import PropTypes from 'prop-types'

const centered = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        background: '#1e8eff',
        color: '#fff',
    },
    header: {
        ...centered,
        height: 80,
        fontSize: 30,
        borderBottom: '1px solid #fff',
    },
    exercise: {
        ...centered,
        flex: 1,
    },
    controls: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        borderTop: '1px solid #fff',
    },
}

class Player extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            startTime: new Date(),
            elapsed: 0,
        }
    }

    componentDidMount () {
        this.interval = setInterval(() => {
            this.setState({ elapsed: new Date() - this.state.startTime })
        }, 250)
    }

    stop () {}

    pause () {}

    resume () {}

    render () {
        const elapsed = Math.round((this.state.elapsed) / 1000)
        return (
            <div style={{
                ...styles.wrapper,
                width: this.props.width,
                height: this.props.height,
            }}>
                <div style={styles.header}>
                    {elapsed}
                </div>
                <div style={styles.exercise}>
                    exercise illustration
                </div>
                <div style={styles.controls}>
                    <div>other</div>
                    <div>pause/resume</div>
                </div>
            </div>
        )
    }
}

const exerciseShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
})

Player.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    exercises: PropTypes.arrayOf(exerciseShape).isRequired,
}

export default Player
