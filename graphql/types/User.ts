import { prisma } from "../../lib/prisma";
import { builder } from "../builder";

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email'),
    firstName: t.exposeString('firstName'),
    lastName: t.exposeString('lastName'),
    password: t.exposeString('password'),
    image: t.exposeString('image', {
      nullable: true
    }),
    totalTrips: t.exposeInt('totalTrips'),
    allStar: t.exposeBoolean('allStar'),
    rating: t.exposeInt('rating'),
    host: t.exposeBoolean('host'),
    verified: t.exposeBoolean('verified'),
    cars: t.relation('cars'),
    trips: t.relation('trips'),
  })
})

builder.mutationField("createUser", (t) =>
  t.prismaField({
    type: 'User',
    args: {
      email: t.arg.string({ required: true }),
      firstName: t.arg.string({ required: true }),
      lastName: t.arg.string({ required: true }),
      verified: t.arg.boolean({ required: true }),
      host: t.arg.boolean({ required: true }),
      password: t.arg.string({ required: true})
    },
    resolve: async (query, _parent, args, ctx) => {
      const { email, firstName, lastName, verified, host, password } = args
      return prisma.user.create({
        ...query,
        data: {
          email, firstName, lastName, verified, host, password
        }
      })
    }
  })
)