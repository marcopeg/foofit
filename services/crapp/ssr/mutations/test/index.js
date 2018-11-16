import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
} from 'graphql'

import { validateToken } from 'ssr/services/test'

import dbReset from './db-reset'

export default {
    args: {
        token: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    type: new GraphQLObjectType({
        name: 'TestMutation',
        fields: {
            dbReset,
        },
    }),
    resolve: async (params, args) => validateToken(args.token),
}
