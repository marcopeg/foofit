import React from 'react'
import PropTypes from 'prop-types'
import { flexCentered } from 'app/mixins'
import Starter from './Starter'
import Finisher from './Finisher'
import Duration from './Duration'
import Pause from './Pause'
import Stop from './Stop'
import ExerciseCountdown from './ExerciseCountdown'
import ExerciseDisplay from './ExerciseDisplay'
import Number from './Number'

const styles = {
    wrapper: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        background: '#1e8eff',
        color: '#fff',
    },
    countdown: {
        ...flexCentered,
        height: 110,
        fontSize: 80,
        letterSpacing: 10,
    },
    numbers: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        backgroundColor: 'rgba(29, 69, 109, 0.5)',
        paddingLeft: 20,
        paddingRight: 20,
    },
    footer: {
        ...flexCentered,
        justifyContent: 'space-between',
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 20,
        backgroundColor: 'rgba(29, 69, 109, 0.5)',
        borderBottom: '1px solid #fff',
    },
    list: {
        ...flexCentered,
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
    },
}

const PlayerUI = ({
    width,
    height,
    autoplay,
    exercises,
    exerciseIndex,
    isPlaying,
    isPaused,
    isFinished,
    elapsed,
    remaining,
    activeLapse,
    pauseLapse,
    totalPauseLapse,
    exerciseLapse,
    exercisePauseLapse,
    start,
    stop,
    pause,
    resume,
    finish,
}) => {
    const displayHeight = height * 0.3
    const listHeight = height - displayHeight - styles.countdown.height - styles.numbers.height - styles.footer.height
    return (
        <div>
            <div style={{
                ...styles.wrapper,
                width,
                height,
            }}>
                <div style={styles.countdown}>
                    <ExerciseCountdown
                        {...exercises[exerciseIndex]}
                        elapsed={exerciseLapse}
                    />
                </div>
                <div style={styles.numbers}>
                    <Number
                        label={'elapsed'}
                        children={<Duration unit="ms" value={activeLapse} />}
                    />
                    <Number
                        label={'interval'}
                        children={`${exerciseIndex + 1}/${exercises.length}`}
                    />
                    <Number
                        label={'remaining'}
                        children={<Duration unit="ms" value={remaining} />}
                    />
                </div>
                <ExerciseDisplay
                    {...exercises[exerciseIndex]}
                    elapsed={exerciseLapse}
                    width={width}
                    height={displayHeight}
                />
                <div style={{
                    ...styles.list,
                    height: listHeight,
                }}>
                    list of exercises
                </div>
                <div style={styles.footer}>
                    <Stop
                        stop={stop}
                    />
                    <Number
                        label={'workout'}
                        children={<Duration unit="ms" value={elapsed} />}
                    />
                    <Pause
                        isPlaying={isPlaying}
                        pause={pause}
                        resume={resume}
                    />
                </div>
            </div>
            {autoplay ? null : (
                <Starter
                    isVisible={(!isPlaying && !isPaused && !isFinished)}
                    start={start}
                    width={width}
                    height={height}
                />
            )}
            <Finisher
                isVisible={isFinished}
                finish={finish}
                width={width}
                height={height}
            />
        </div>
    )
}

const exerciseShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
})

PlayerUI.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    autoplay: PropTypes.bool.isRequired,
    exerciseIndex: PropTypes.number.isRequired,
    exercises: PropTypes.arrayOf(exerciseShape).isRequired,
    isPlaying: PropTypes.bool.isRequired,
    isPaused: PropTypes.bool.isRequired,
    isFinished: PropTypes.bool.isRequired,
    elapsed: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
    activeLapse: PropTypes.number.isRequired,
    pauseLapse: PropTypes.number.isRequired,
    totalPauseLapse: PropTypes.number.isRequired,
    exerciseLapse: PropTypes.number.isRequired,
    exercisePauseLapse: PropTypes.number.isRequired,
    start: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired,
    resume: PropTypes.func.isRequired,
    finish: PropTypes.func.isRequired,
}

export default PlayerUI
