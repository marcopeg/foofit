import {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
} from 'graphql'

import { signup } from 'features/auth'

export default {
    description: 'Signup a new user',
    args: {
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
        passw: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    type: new GraphQLObjectType({
        name: 'SignupType',
        fields: {
            id: { type: new GraphQLNonNull(GraphQLID) },
        },
    }),
    resolve: (params, args) => signup(args.email, args.passw),
}
