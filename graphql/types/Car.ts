import { prisma } from "../../lib/prisma";
import { builder } from "../builder";

builder.prismaObject('Car', {
  fields: (t) => ({
    id: t.exposeID('id'),
    make: t.exposeString('make'),
    model: t.exposeString('model'),
    totalTrips: t.exposeInt('totalTrips'),
    rating: t.exposeInt('rating'),
    address: t.exposeString('address'),
    owner: t.relation('owner'),
    trips: t.relation('trips'),
  })
})

builder.queryField("getCars", (t) =>
// 2. 
  t.prismaField({
    // 3. 
    type: ['Car'],
    // 4. 
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.car.findMany({ ...query })
  })
)