import { NextApiRequest, NextApiResponse } from 'next'
import { schema } from '../../../../graphql/schema'
import { createYoga } from 'graphql-yoga'

const { handleRequest } = createYoga<{
    req: NextApiRequest
    res: NextApiResponse
  }>({
    graphqlEndpoint: '/graphql',
    schema,
    fetchAPI: {
        Request,
        Response
    }
})

export { handleRequest as GET, handleRequest as POST}
