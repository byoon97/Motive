import { PrismaClient } from '@prisma/client';
import { createSchema } from 'graphql-yoga';

const prisma = new PrismaClient();

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
  scalar Date
  
  type User {
      id: Int!
      email: String!
      firstName: String
      lastName: String
      host: Boolean
      cars: [Car!]
      trips: [Trip!]
    }
    
    type Car {
      id: Int!
      make: String
      totalTrips: Int
      address: String
      model: String
      rating: Int
      image: [String]
      owner: User
      trips: [Trip!]
    }
    
    type Trip {
      id: Int!
      startDate: Date
      endDate: Date
      rating: Int
      review: String
      car: Car
      user: User
    }
    
    type Query {
      getUser(id: Int!): User
      getCars: [Car!]
      getTrips: [Trip!]
    }
  `
})
