/* eslint react/prefer-stateless-function: off */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import slugify from 'slugify'
import MobilePage, { List } from 'features/mobile/MobilePage'
import { loadPrograms } from '../programs.service'

const mapState = (state) => ({
    items: state.programs.items,
    error: state.programs.loadingError,
})

const mapDispatch = (dispatch, { history }) => {
    return {
        onLoad: () => dispatch(loadPrograms()),
        onDisclose: ({ id, title }) => history.push(`/programs/${id}/${slugify(title)}`),
    }
}

class ProgramsList extends React.PureComponent {
    componentWillMount () {
        if (!this.props.error) {
            console.log('load stuff', this.props.error)
            this.props.onLoad()
        }
    }

    render () {
        return (
            <MobilePage>
                <MobilePage.Header>
                    Programs
                </MobilePage.Header>
                <MobilePage.Body withPadding>
                    {this.props.error ? (
                        <div>there was an error!</div>
                    ) : (
                        <List
                            items={this.props.items}
                            onDisclose={this.props.onDisclose}
                            subtitleProp={'desc'}
                        />
                    )}
                </MobilePage.Body>
            </MobilePage>
        )
    }
}

const programType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
})

ProgramsList.propTypes = {
    onLoad: PropTypes.func.isRequired,
    onDisclose: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(programType).isRequired,
}

export default connect(mapState, mapDispatch)(ProgramsList)
