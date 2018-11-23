import { GraphQLObjectType, GraphQLID } from 'graphql'
import { getSession } from 'ssr/features/auth'
import getProgramsList from './get-programs-list'

export default {
    type: new GraphQLObjectType({
        name: 'SessionQuery',
        fields: {
            id: { type: GraphQLID },
            getProgramsList,
        },
    }),
    resolve: async (params, arg, { req, res, data }) => {
        data.session = await getSession(req, res)
        // data.session = { id: 1 }
        return data.session
    },
}
