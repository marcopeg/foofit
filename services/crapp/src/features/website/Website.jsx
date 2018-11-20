import React from 'react'
import loadable from 'react-loadable'
import { connect } from 'react-redux'
import { setName } from './website.reducer'

export const Foo = loadable({
    loader: () => import('./Foo'),
    loading: () => <div>loading foo</div>,
})


const mapState = ({ ssr, website }) => ({ ssr, name: website.name })

class Website extends React.Component {
    componentWillMount () {
        if (this.props.name === 'foo') {
            this.props.ssr.await(new Promise((resolve) => {
                setTimeout(() => {
                    this.props.dispatch(setName('hoho'))
                    resolve()
                }, 50)
            }))
        }
    }

    render () {
        return (
            <div>
                {this.props.name}
                {this.props.name === 'foo' ? null : <Foo />}
            </div>
        )
    }
}

export default connect(mapState)(Website)
