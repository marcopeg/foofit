/* eslint react/prefer-stateless-function: off */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import slugify from 'slugify'
import MobilePage, { List } from 'lib/MobilePage'
import { updatePrograms } from '../programs.service'

const mapState = (state) => ({
    items: state.programs.items,
})

const mapDispatch = (dispatch, { history }) => {
    return {
        onLoad: () => dispatch(updatePrograms()),
        onDisclose: ({ id, title }) => history.push(`/program/${id}/${slugify(title)}`),
    }
}

class ProgramsList extends React.PureComponent {
    componentDidMount () {
        this.props.onLoad()
    }

    render () {
        return (
            <MobilePage>
                <MobilePage.Header>
                    Programs
                </MobilePage.Header>
                <MobilePage.Body>
                    <div style={{ margin: '20px 10px' }}>
                        <List
                            items={this.props.items}
                            // renderItem={({ title }) => (
                            //     <List.Item>{title}</List.Item>
                            // )}
                            onDisclose={this.props.onDisclose}
                        />
                    </div>
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
