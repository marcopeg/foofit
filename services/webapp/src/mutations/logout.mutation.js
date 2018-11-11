import {
    GraphQLString,
} from 'graphql'

import { logout } from 'features/auth'

export default {
    description: 'Destroy the session cookie',
    type: GraphQLString,
    resolve: (params, args, { req, res }) => logout(req, res),
}
