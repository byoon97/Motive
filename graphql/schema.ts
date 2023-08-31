import { PrismaClient } from '@prisma/client';
import { createSchema } from 'graphql-yoga';
import { GraphQLScalarType, Kind } from 'graphql';
import prisma from '../lib/prisma';


export const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error('GraphQL Date Scalar serializer expected a `Date` object');
  },
  parseValue(value) {
    if (typeof value === 'number') {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error('GraphQL Date Scalar parser expected a `number`');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

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
      getAllUsers : [User!]
    }
  `,
  resolvers: {
    Date: dateScalar,
    Query: {
      getUser: async (_: any, args: { id: number }) => {
        return await prisma.user.findUnique({
          where: { id: args.id },
          include: { cars: true, trips: true },
        });
      },
      getCars: async () => {
        return await prisma.car.findMany({
          include: { trips: true, owner: true}
        });
      },
      getTrips: async () => {
        return await prisma.trip.findMany({
          include: { car: true, user: true }
        });
      },
      getAllUsers: async () => {
        return await prisma.user.findMany({
          include: { cars: true, trips: true },
        });
      },
    },
  }
})
