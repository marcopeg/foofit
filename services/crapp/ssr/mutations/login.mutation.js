import {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
} from 'graphql'

import { login } from 'ssr/features/auth'

export default {
    description: 'Login a user and create a JWT',
    args: {
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
        passw: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    type: new GraphQLObjectType({
        name: 'LoginType',
        fields: {
            id: { type: new GraphQLNonNull(GraphQLID) },
        },
    }),
    resolve: (params, args, { req, res }) => login(req, res, args.email, args.passw),
}
