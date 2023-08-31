import { builder } from "../builder";

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email'),
    firstName: t.exposeString('firstName'),
    lastName: t.exposeString('lastName'),
    host: t.exposeBoolean('host'),
    cars: t.relation('cars'),
    trips: t.relation('trips')
  })
})