import { builder } from "../builder";
import { prisma } from "../../lib/prisma";

builder.prismaObject('Trip', {
  fields: (t) => ({
    id: t.exposeID('id'),
    rating: t.exposeInt('rating'),
    review: t.exposeString('review'),
    startDate: t.expose("startDate", {
        type: "Date",
    }),
    endDate: t.expose("endDate", {
        type: "Date",
    }),
    user: t.relation('user'),
    car: t.relation('car')
  })
})

builder.queryField("trips", (t) =>
// 2. 
  t.prismaField({
    // 3. 
    type: ['Trip'],
    // 4. 
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.trip.findMany({ ...query })
  })
)