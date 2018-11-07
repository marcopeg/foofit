/* eslint react/prefer-stateless-function: off */
import React from 'react'
import PropTypes from 'prop-types'
import PlayerUI from './PlayerUI'

class Player extends React.Component {
    constructor (props) {
        super(props)

        const duration = this.props.exercises.reduce((acc, curr) =>
            acc + (curr.type === 'duration' ? curr.value : 0)
        , 0)

        this.state = {
            isPlaying: false,
            isPaused: false,
            isFinished: false,

            // handle generic time
            startTime: null,
            elapsed: 0,
            duration: duration * 1000,
            activeLapse: 0,
            tick: 0,

            // handle generic pause
            pauseStart: null,
            pauseLapse: 0,
            totalPauseLapse: 0,

            // handle exercise stuff
            exerciseIndex: 0,
            exerciseStart: null,
            exerciseLapse: 0,
            exercisePauseLapse: 0,
            exerciseTotalPauseLapse: 0,
        }
    }

    componentDidMount () {
        if (this.props.autoplay) {
            this.start()
        }
    }

    shouldComponentUpdate (nextProps, nextState) {
        const updateProps = [
            'width',
            'height',
        ].some(key => this.props[key] !== nextProps[key])
        const updateState = [
            'tick',
            'isPlaying',
            'isPaused',
            'exerciseIndex',
        ].some(key => this.state[key] !== nextState[key])
        return updateState || updateProps
    }

    componentWillUnmount () {
        this.clearTimers()
    }

    clearTimers = () => {
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
                    this.timer = setTimeout(() => this.setState({
                        exerciseIndex: nextIndex,
                        exerciseStart: now,
                        exerciseLapse: 0,
                        exercisePauseLapse: 0,
                        exerciseTotalPauseLapse: 0,
                    }))
                } else {
                    this.clearTimers()
                    this.setState({
                        isPlaying: false,
                        isFinished: true,
                    })
                }
            }
        }

        this.setState(update)
    }

    start = () => {
        const startTime = this.getTimeTick()
        this.setState({
            startTime,
            exerciseStart: startTime,
            isPlaying: true,
        })
        this.interval = setInterval(this.tick, this.props.tickUpdate)
    }

    stop = () => {
        this.clearTimers()
        this.props.onStop()
    }

    finish = () => {
        this.clearTimers()
        this.props.onFinish()
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

    render () {
        return (
            <PlayerUI
                {...this.props}
                {...this.state}
                remaining={this.state.duration - this.state.activeLapse}
                start={this.start}
                pause={this.pause}
                resume={this.resume}
                stop={this.stop}
                finish={this.finish}
            />
        )
    }
}

Player.propTypes = {
    autoplay: PropTypes.bool,
    tickUpdate: PropTypes.number,
    onStop: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired,
}

Player.defaultProps = {
    autoplay: true,
    tickUpdate: 250,
}

export default Player
