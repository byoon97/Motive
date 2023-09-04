import { prisma } from "../../lib/prisma";
import { builder } from "../builder";

builder.prismaObject('VerificationToken', {
    fields: (t) => ({
      token: t.exposeString('token'),
      activatedAt: t.expose("activatedAt", {
          type: "Date",
          nullable: true
      }),
      user: t.relation('user'),
    })
  })

  builder.mutationField("createVToken", (t) =>
  t.prismaField({
    type: 'VerificationToken',
    args: {
      token: t.arg.string({required: true}),
      user: t.arg.int({required: true}),
      activatedAt: t.arg({
        type: 'Date', // or 'Date' if you want a date without time
        description: 'When Token was created',
      }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { token, user, activatedAt } = args
      return prisma.verificationToken.create({
        ...query,
        data: {
          token,
          activatedAt,
          user: { connect: {id: user } }
        },
      });

    }
  })
)