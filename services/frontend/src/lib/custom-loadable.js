import React from 'react'
import loadable from 'react-loadable'
import Loader from 'react-loader-spinner'

const customLoadable = ({ loader, loading }) => loadable({
    loader,
    loading: () => loading ? loading : (
        <div style={{ width: '100%', marginTop: 80, textAlign: 'center' }}>
            <Loader
                type="ThreeDots"
                color="#1e8eff"
                width={100}
                height={30}
            />
        </div>
    ),
})

export default customLoadable
