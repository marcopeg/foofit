/* eslint react/prefer-stateless-function: off */
import React from 'react'
import PropTypes from 'prop-types'
import PlayerUI from './PlayerUI'

class Player extends React.Component {
    constructor (props) {
        super(props)
        const startTime = this.getTimeTick()
        this.state = {
            isPlaying: true,
            isPaused: false,
            isFinished: false,

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
                    this.setState({
                        isPlaying: false,
                        isFinished: true,
                    })
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
            <PlayerUI
                {...this.props}
                {...this.state}
                pause={this.pause}
                resume={this.resume}
                stop={this.stop}
            />
        )
    }
}

Player.propTypes = {
    tickUpdate: PropTypes.number,
}

Player.defaultProps = {
    tickUpdate: 250,
}

export default Player
