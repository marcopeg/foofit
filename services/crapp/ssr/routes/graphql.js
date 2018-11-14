import expressGraphql from 'express-graphql'
import {
    GraphQLSchema,
    GraphQLObjectType,
} from 'graphql'

import queries from 'queries/index'
import mutations from 'mutations/index'

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: queries,
})

const RootMutationType = new GraphQLObjectType({
    name: 'RootMutation',
    fields: mutations,
})

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType,
})

export const graphQLHandler = (req, res) => expressGraphql({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
    context: { req, res, data: {} },
})(req, res)
