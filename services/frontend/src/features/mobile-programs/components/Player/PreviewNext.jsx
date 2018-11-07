/* eslint react/prefer-stateless-function: off */

import React from 'react'
import PropTypes from 'prop-types'
import ExerciseImg from './ExerciseImg'

const lines = [
    'this is the last one!',
    'few more seconds and you\'re done!',
    'hold on just this one',
    'beer is on sight :-)',
]

const styles = {
    label: {
        textAlign: 'center',
        textTransform: 'lowercase',
        paddingBottom: 5,
        fontSize: 12,
    },
    title: {
        textAlign: 'center',
        textTransform: 'uppercase',
        paddingBottom: 10,
        fontSize: 18,
    },
    finish: {
        fontSize: 22,
        textAlign: 'center',
    },
}

class PreviewNext extends React.Component {
    shouldComponentUpdate (nextProps) {
        return [
            'width',
            'height',
            'exerciseIndex',
        ].some(key => this.props[key] !== nextProps[key])
    }

    render () {
        const { exerciseIndex, exercises, width, height } = this.props
        if (exerciseIndex + 1 >= exercises.length) {
            return (
                <div style={styles.finish}>
                    {lines[Math.floor(Math.random() * lines.length)]}
                </div>
            )
        }

        const exercise = exercises[exerciseIndex + 1]

        return (
            <div>
                <div style={styles.label}>{'up next'}</div>
                <div style={styles.title}>{exercise.title}</div>
                <div>
                    <ExerciseImg
                        {...exercise}
                        width={width * 0.5}
                        height={height * 0.5}
                    />
                </div>
            </div>
        )
    }
}

const exerciseShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
})

PreviewNext.propTypes = {
    exerciseIndex: PropTypes.number.isRequired,
    exercises: PropTypes.arrayOf(exerciseShape).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

export default PreviewNext
