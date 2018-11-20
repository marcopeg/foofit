import React from 'react'
import PropTypes from 'prop-types'
import { flexCentered } from 'app/mixins'

const styles = {
    wrapper: {
        ...flexCentered,
        flexDirection: 'column',
    },
    label: {
        ...flexCentered,
        textTransform: 'uppercase',
        fontSize: 12,
    },
    children: {
        ...flexCentered,
        fontSize: 22,
        paddingTop: 5,
    },
}

const Number = ({ label, children }) => (
    <div style={styles.wrapper}>
        <div style={styles.label}>{label}</div>
        <div style={styles.children}>{children}</div>
    </div>
)

Number.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired, // eslint-disable-line
}

export default Number
