/* eslint react/prefer-stateless-function: off */
import React from 'react'
import { flexCentered } from 'app/mixins'
import PropTypes from 'prop-types'
import Duration from './Duration'
import Pause from './Pause'

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        background: '#1e8eff',
        color: '#fff',
    },
    header: {
        ...flexCentered,
        height: 80,
        fontSize: 30,
        borderBottom: '1px solid #fff',
    },
    exercise: {
        ...flexCentered,
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
            isPlaying: true,
            isPaused: false,
            pauseStart: null,
            elapsed: 0,
            activeLapse: 0,
            currentPauseLapse: 0,
            totalPauseLapse: 0,
            currentExerciseIndex: 0,
        }
    }

    componentDidMount () {
        this.interval = setInterval(this.tick, this.props.tickUpdate)
    }

    shouldComponentUpdate (nextProps, nextState) {
        return [
            'elapsed',
            'isPaused',
        ].some(key => this.state[key] !== nextState[key])
    }

    componentWillUpdate (nextProps, nextState) {
        console.log('second', this.state.elapsed)
    }

    componentWillUnmount () {
        clearInterval(this.interval)
    }

    getCurrentExercise = () => {
        return 0
    }

    tick = () => {
        const now = new Date()
        const update = {
            elapsed: Math.round((now - this.state.startTime) / 1000),
        }

        // calculate current paused time
        if (this.state.isPaused) {
            update.currentPauseLapse = Math.round((now - this.state.pauseStart) / 1000)
        }

        // calculate current working time
        update.activeLapse = update.elapsed - this.state.totalPauseLapse - (update.currentPauseLapse || 0)

        // console.log(this.state.activeLapse, update.activeLapse, this.state.activeLapse !== update.activeLapse)
        if (update.activeLapse > this.state.activeLapse) {
            update.currentExerciseIndex = this.getCurrentExercise()
        }

        this.setState(update)
    }

    pause = () => {
        this.setState({
            isPlaying: false,
            isPaused: true,
            pauseStart: new Date(),
        })
    }

    resume = () => {
        this.setState({
            isPlaying: true,
            isPaused: false,
            pauseStart: null,
            totalPauseLapse: this.state.totalPauseLapse + this.state.currentPauseLapse,
            currentPauseLapse: 0,
        })
    }

    stop = () => {}

    render () {
        return (
            <div style={{
                ...styles.wrapper,
                width: this.props.width,
                height: this.props.height,
            }}>
                <div style={styles.header}>
                    <Duration value={this.state.elapsed} />
                    <Pause
                        isPlaying={this.state.isPlaying}
                        pause={this.pause}
                        resume={this.resume}
                    />
                </div>
                <div style={styles.exercise}>
                    <div style={{ textAlign: 'right' }}>
                        active <Duration value={this.state.activeLapse} />
                        <br />
                        current pause <Duration value={this.state.currentPauseLapse} />
                        <br />
                        total pause <Duration value={this.state.totalPauseLapse} />
                        <hr />
                        current exercise {this.state.currentExerciseIndex}
                    </div>
                </div>
                <div style={styles.controls}>
                    <div>other</div>
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
    tickUpdate: PropTypes.number,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    exercises: PropTypes.arrayOf(exerciseShape).isRequired,
}

Player.defaultProps = {
    tickUpdate: 150,
}

export default Player
