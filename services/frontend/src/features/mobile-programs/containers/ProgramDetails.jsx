/* eslint react/prefer-stateless-function: off */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import slugify from 'slugify'
import MobilePage, { List, Text } from 'lib/MobilePage'
import { updatePrograms } from '../programs.service'

const mapState = (state, { match }) => {
    const program = state.programs.items.find(i => i.id === match.params.programId)
    return {
        program,
        isNotFound: Boolean(!program && state.programs.items.length),
    }
}

const mapDispatch = (dispatch, { history, match }) => {
    return {
        loadPrograms: () => dispatch(updatePrograms()),
        goBack: () => history.push('/welcome'),
        onDisclose: (item) =>
            history.push(`${match.url}/${item.id}/${slugify(item.title)}`),
    }
}

class ProgramsDetails extends React.PureComponent {
    componentDidMount () {
        if (!this.props.program) this.props.loadPrograms()
    }

    renderBody () {
        if (this.props.isNotFound) {
            return (
                <Text onClick={this.props.goBack}>
                    program not found, click here to go to the list
                </Text>
            )
        }

        if (!this.props.program) {
            return (
                <Text>loading...</Text>
            )
        }

        return (
            <List
                items={this.props.program.trainings}
                subtitleProp={'duration'}
                onDisclose={(item) => this.props.onDisclose(item)}
            />
        )
    }

    render () {
        return (
            <MobilePage>
                <MobilePage.Header>
                    {this.props.program ? this.props.program.title : '...'}
                </MobilePage.Header>
                <MobilePage.Body withPadding>
                    {this.renderBody()}
                </MobilePage.Body>
            </MobilePage>
        )
    }
}

const programType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
})

ProgramsDetails.propTypes = {
    loadPrograms: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    onDisclose: PropTypes.func.isRequired,
    program: programType,
    isNotFound: PropTypes.bool.isRequired,
}

ProgramsDetails.defaultProps = {
    program: null,
}

export default connect(mapState, mapDispatch)(ProgramsDetails)
