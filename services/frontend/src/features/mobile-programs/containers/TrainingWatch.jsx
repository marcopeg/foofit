/* eslint react/prefer-stateless-function: off */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MobilePage, { Text } from 'features/mobile/MobilePage'
import { updatePrograms } from '../programs.service'
import Player from '../components/Player'

const mapState = (state, { match }) => {
    const program = state.programs.items.find(i => i.id === match.params.programId)
    const training = program
        ? program.trainings.find(i => i.id === match.params.trainingId)
        : null

    const exercisesMap = training
        ? program.exercises.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {})
        : null

    const exercises = training
        ? training.progression
            .map(item => ({
                ...item,
                ...exercisesMap[item.id],
                duration: `${item.value}${exercisesMap[item.id].type === 'duration' ? 's' : ' reps'}`,
            }))
        : null

    return {
        training,
        exercises,
        isNotFound: (
            Boolean(!program && state.programs.items.length)
            || Boolean(!training && program)
        ),
    }
}

const mapDispatch = (dispatch, { history, match }) => {
    return {
        loadPrograms: () => dispatch(updatePrograms()),
        on404: () => history.push('/welcome'),
        onStop: () => {
            console.log('session stopped')
            history.goBack()
        },
        onFinish: () => {
            console.log('session completed')
            history.goBack()
        },
    }
}

const styles = {
    centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
}

class TrainingWatch extends React.PureComponent {
    componentDidMount () {
        if (!this.props.training) this.props.loadPrograms()
    }

    renderBody = ({ width, height }) => {
        if (this.props.isNotFound) {
            return (
                <div style={{ ...styles.centered, width, height, padding: 30 }}>
                    <Text onClick={this.props.on404}>
                        training not found,<br />click here to go to the list
                    </Text>
                </div>
            )
        }

        if (!this.props.training) {
            return (
                <div style={{ ...styles.centered, width, height, padding: 30 }}>
                    <Text>loading...</Text>
                </div>
            )
        }

        return (
            <Player
                // autoplay
                width={width}
                height={height}
                exercises={this.props.exercises}
                onStop={this.props.onStop}
                onFinish={this.props.onFinish}
            />
        )
    }

    render () {
        return (
            <MobilePage>
                <MobilePage.Body>
                    {this.renderBody}
                </MobilePage.Body>
            </MobilePage>
        )
    }
}

const trainingType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
})

const exerciseType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
})

TrainingWatch.propTypes = {
    loadPrograms: PropTypes.func.isRequired,
    on404: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired,
    training: trainingType,
    exercises: PropTypes.arrayOf(exerciseType),
    isNotFound: PropTypes.bool.isRequired,
}

TrainingWatch.defaultProps = {
    training: null,
    exercises: null,
}

export default connect(mapState, mapDispatch)(TrainingWatch)
