import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLBoolean,
} from 'graphql'

import { validateToken } from 'ssr/services/test'

// import getProgramsList from './get-programs-list'

export default {
    args: {
        token: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    type: new GraphQLObjectType({
        name: 'TestQuery',
        fields: {
            enabled: { type: GraphQLBoolean },
            // getProgramsList,
        },
    }),
    resolve: async (params, args) => validateToken(args.token),
}
