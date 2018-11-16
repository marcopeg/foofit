import {
    GraphQLString,
} from 'graphql'

import { logout } from 'ssr/features/auth'

export default {
    description: 'Destroy the session cookie',
    type: GraphQLString,
    resolve: (params, args, { req, res }) => logout(req, res),
}
