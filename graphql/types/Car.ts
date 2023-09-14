import { Car } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { builder } from "../builder";

builder.prismaObject('Car', {
  fields: (t) => ({
    id: t.exposeID('id'),
    make: t.exposeString('make'),
    model: t.exposeString('model'),
    ppd: t.exposeInt('ppd'),
    totalTrips: t.exposeInt('totalTrips'),
    rating: t.exposeInt('rating'),
    address: t.exposeString('address'),
    owner: t.relation('owner'),
    trips: t.relation('trips'),
    image: t.field({
      type: ['String'],
      resolve: (root) => root.image,
    }),
  })
})

builder.queryField("getCars", (t) =>
  t.prismaField({
    type: ['Car'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.car.findMany({ ...query })
  })
)

builder.queryField("getCarByID", (t) => 
  t.prismaField({
    type: 'Car',
    args : {
      id: t.arg.int({ required: true }),
    },
    resolve: (_query, _parent, args, _ctx, _info) => {
      const { id } = args;
      return prisma.car.findUnique({
        where: {
          id
        }
      }) as Promise<Car>; // Explicitly cast to Promise<Car>
    }
  })
)

builder.queryField("getCarByMake", (t) =>
  t.prismaField({
    type: ['Car'],
    args : {
      make: t.arg.string({required: true}),
    },
    resolve: async (_query, _parent, args, _ctx, _info) => {
      const { make } = args
      const cars =  await prisma.car.findMany({
        where : {
          make
        }
      })
      return cars
    }
  })
)
