import { GraphQLObjectType, GraphQLID } from 'graphql'
import { getSession } from 'features/auth'
import getProgramsList from './get-programs-list'

export default {
    type: new GraphQLObjectType({
        name: 'SessionQuery',
        fields: {
            id: { type: GraphQLID },
            getProgramsList,
        },
    }),
    resolve: async (params, arg, { req, data }) => {
        data.session = await getSession(req)
        return data.session
    },
}
