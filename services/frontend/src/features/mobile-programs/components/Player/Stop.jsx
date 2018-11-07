import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
import { flexCentered } from 'app/mixins'

const styles = {
    wrapper: {
        ...flexCentered,
        width: 45,
        height: 45,
    },
}

const Stop = ({ stop }) => (
    <div
        onClick={stop}
        style={styles.wrapper}
        children={<FaTimes />}
    />
)


Stop.propTypes = {
    stop: PropTypes.func.isRequired,
}

export default Stop
