import React from 'react'
import PropTypes from 'prop-types'
import { FaPlay, FaPause } from 'react-icons/fa'
import { flexCentered } from 'app/mixins'

const styles = {
    wrapper: {
        ...flexCentered,
        width: 45,
        height: 45,
    },
}

const Pause = ({ isPlaying, pause, resume }) => {
    const icon = isPlaying
        ? <FaPause />
        : <FaPlay />

    const action = isPlaying
        ? pause
        : resume

    return (
        <div
            onClick={action}
            style={styles.wrapper}
            children={icon}
        />
    )
}


Pause.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    pause: PropTypes.func.isRequired,
    resume: PropTypes.func.isRequired,
}

export default Pause
