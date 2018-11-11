import { logout } from './auth.service'

export default [
    {
        type: '@graphql::403',
        handler: (action, { history }) => (dispatch) => {
            dispatch(logout())
            history.replace('/error')
        },
    },
]
