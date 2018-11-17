import loadable from 'react-loadable'

export default loadable({
    loader: () => import('./Foo'),
    loading: () => null,
})
