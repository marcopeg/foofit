import {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
} from 'graphql'

import { getPrograms } from 'features/profile'

export default {
    description: 'Provides the cached lists of programs data for a user',
    args: {
        lastUpdate: {
            type: GraphQLString,
        },
    },
    type: new GraphQLList(new GraphQLObjectType({
        name: 'getProgramList__Item',
        fields: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            title: { type: new GraphQLNonNull(GraphQLString) },
            desc: { type: GraphQLString },
            lastUpdate: { type: new GraphQLNonNull(GraphQLString) },
            trainings: { type: new GraphQLList(new GraphQLObjectType({
                name: 'getProgramList__Item__Training',
                fields: {
                    id: { type: new GraphQLNonNull(GraphQLID) },
                    title: { type: new GraphQLNonNull(GraphQLString) },
                    duration: { type: new GraphQLNonNull(GraphQLString) },
                    progression: { type: new GraphQLList(new GraphQLObjectType({
                        name: 'getProgramList__Item__Training__ProgressionItem',
                        fields: {
                            id: { type: new GraphQLNonNull(GraphQLID) },
                            value: { type: new GraphQLNonNull(GraphQLInt) },
                        },
                    })) },
                },
            })) },
            exercises: { type: new GraphQLList(new GraphQLObjectType({
                name: 'getProgramList__Item__Exercise',
                fields: {
                    id: { type: new GraphQLNonNull(GraphQLID) },
                    title: { type: new GraphQLNonNull(GraphQLString) },
                    type: { type: new GraphQLNonNull(GraphQLString) },
                },
            })) },
        },
    })),
    resolve: (params, args, { data }) => getPrograms(data.session.id, args.lastUpdate),
}
