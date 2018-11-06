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
        const startTime = this.getTimeTick()
        this.state = {
            isPlaying: true,
            isPaused: false,

            // handle generic time
            startTime,
            elapsed: 0,
            activeLapse: 0,
            tick: 0,

            // handle generic pause
            pauseStart: null,
            pauseLapse: 0,
            totalPauseLapse: 0,

            // handle exercise stuff
            exerciseIndex: 0,
            exerciseStart: startTime,
            exerciseLapse: 0,
            exercisePauseLapse: 0,
            exerciseTotalPauseLapse: 0,
        }
    }

    componentDidMount () {
        this.interval = setInterval(this.tick, this.props.tickUpdate)
    }

    shouldComponentUpdate (nextProps, nextState) {
        return [
            'tick',
            'isPaused',
        ].some(key => this.state[key] !== nextState[key])
    }

    componentWillUnmount () {
        clearInterval(this.interval)
        clearTimeout(this.timer)
    }

    getTimeTick = () => Math.floor(Date.now() / 1000) * 1000

    getCurrentExercise = () => this.props.exercises[this.state.exerciseIndex]

    tick = () => {
        const now = this.getTimeTick()
        const update = {
            elapsed: (now - this.state.startTime),
            pauseLapse: this.state.isPaused ? (now - this.state.pauseStart) : 0,
        }

        // calculate current working time
        update.activeLapse = update.elapsed - this.state.totalPauseLapse - update.pauseLapse
        update.exercisePauseLapse = this.state.exerciseTotalPauseLapse + update.pauseLapse
        update.exerciseLapse = (now - this.state.exerciseStart) - update.exercisePauseLapse

        // used to trigger UI update
        update.tick = Math.floor(update.elapsed / 1000)

        // check for exercise switch or training session ending
        if (this.state.tick !== update.tick) {
            const exercise = this.getCurrentExercise()
            const remaining = exercise.value * 1000 - this.state.exerciseLapse
            const nextIndex = this.state.exerciseIndex + 1
            if (remaining <= 1000) {
                if (nextIndex < this.props.exercises.length) {
                    console.log('change! exercise', remaining, exercise)
                    this.timer = setTimeout(() => this.setState({
                        exerciseIndex: nextIndex,
                        exerciseStart: now,
                        exerciseLapse: 0,
                        exercisePauseLapse: 0,
                        exerciseTotalPauseLapse: 0,
                    }))
                } else {
                    console.log('finish training')
                    clearInterval(this.interval)
                }
            }
        }

        this.setState(update)
    }

    pause = () => {
        const now = this.getTimeTick()
        this.setState({
            isPlaying: false,
            isPaused: true,
            pauseStart: now,
        })
    }

    resume = () => {
        this.setState({
            isPlaying: true,
            isPaused: false,
            pauseStart: null,
            pauseLapse: 0,
            totalPauseLapse: this.state.totalPauseLapse + this.state.pauseLapse,
            exerciseTotalPauseLapse: this.state.exerciseTotalPauseLapse + this.state.pauseLapse,
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
                    <Duration unit="ms" value={this.state.elapsed} />
                    <Pause
                        isPlaying={this.state.isPlaying}
                        pause={this.pause}
                        resume={this.resume}
                    />
                </div>
                <div style={styles.exercise}>
                    <div style={{ textAlign: 'right' }}>
                        active <Duration unit="ms" value={this.state.activeLapse} />
                        <br />
                        current pause <Duration unit="ms" value={this.state.pauseLapse} />
                        <br />
                        total pause <Duration unit="ms" value={this.state.totalPauseLapse} />
                        <hr />
                        current exercise {this.state.exerciseIndex}/{this.props.exercises.length}
                        <hr />
                        exercise lapse <Duration unit="ms" value={this.state.exerciseLapse} />
                        <br />
                        exercise pause lapse <Duration unit="ms" value={this.state.exercisePauseLapse} />
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
    tickUpdate: 250,
}

export default Player
