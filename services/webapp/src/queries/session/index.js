import { GraphQLObjectType, GraphQLID } from 'graphql'
import getProgramsList from './get-programs-list'

export default {
    type: new GraphQLObjectType({
        name: 'SessionQuery',
        fields: {
            id: { type: GraphQLID },
            getProgramsList,
        },
    }),
    resolve: (params, arg, { data }) => {
        data.sessionId = 1

        return {
            id: data.sessionId,
        }
    },
}
