import { GraphQLBoolean } from 'graphql'
import { resetModels } from 'services/postgres'

export default {
    description: 'Drop the public schema of the main db and re-sync the models',
    type: GraphQLBoolean,
    resolve: async () => {
        await resetModels('default')
        return true
    },
}
