import React from 'react'
import PropTypes from 'prop-types'
import { flexCentered } from 'app/mixins'
import Starter from './Starter'
import Finisher from './Finisher'
import Duration from './Duration'
import Pause from './Pause'

const styles = {
    wrapper: {
        position: 'relative',
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
}) => (
    <div>
        <div style={{
            ...styles.wrapper,
            width,
            height,
        }}>
            <div style={styles.header}>
                <Duration unit="ms" value={elapsed} />
                <Pause
                    isPlaying={isPlaying}
                    pause={pause}
                    resume={resume}
                />
            </div>
            <div style={styles.exercise}>
                <div style={{ textAlign: 'right' }}>
                    active <Duration unit="ms" value={activeLapse} />
                    <br />
                    current pause <Duration unit="ms" value={pauseLapse} />
                    <br />
                    total pause <Duration unit="ms" value={totalPauseLapse} />
                    <hr />
                    current exercise {exerciseIndex}/{exercises.length}
                    <hr />
                    exercise lapse <Duration unit="ms" value={exerciseLapse} />
                    <br />
                    exercise pause lapse <Duration unit="ms" value={exercisePauseLapse} />
                </div>
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
