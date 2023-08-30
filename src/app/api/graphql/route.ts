import { resolvers } from './../../../../graphql/resolvers';
import { schema } from '../../../../graphql/schema'
import { createSchema, createYoga } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'

const {handleRequest} = createYoga({
    graphqlEndpoint: '/graphql',
    schema,
    fetchAPI: {
        Request,
        Response
    }
})

export { handleRequest as GET, handleRequest as POST}
