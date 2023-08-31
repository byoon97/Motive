import SchemaBuilder from "@pothos/core";
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import prisma from "../lib/prisma";
import { DateResolver } from "graphql-scalars";

//export const builder = new SchemaBuilder<...>({ ... }): This line initializes a new instance of the SchemaBuilder class from the @prisma/nexus library. 
//The generic type PrismaTypes is being passed as a parameter, which likely contains type information from Prisma generated types.
export const builder = new SchemaBuilder<{
  Scalars: {
    Date: { Input: Date; Output: Date };
  };
  PrismaTypes: PrismaTypes
}>({
  //plugins: [PrismaPlugin]: This line specifies that the PrismaPlugin should be used as a plugin in the schema. The PrismaPlugin likely extends the schema builder's capabilities to include Prisma-related functionality.
  plugins: [PrismaPlugin],
  //This configuration object specifies the Prisma client instance that should be used. prisma here refers to an instance of the 
  prisma: {
    client: prisma,
  }
})

//This method call defines the query type in your GraphQL schema. It sets up the query type and defines the fields that can be queried.
builder.queryType({
  // This is a function that defines the fields within the query type. It takes a parameter t, which is used to define the fields.
  fields: (t) => ({
    // This line defines a field named ok with a boolean return type. It's a sample field and doesn't necessarily have any real-world meaning. The resolve function defines how the field value is resolved when queried.
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});

builder.addScalarType("Date", DateResolver, {});
