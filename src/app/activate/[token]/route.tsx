import { prisma } from "../../../../lib/prisma";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(
  _request: NextRequest,
  {
    params,
  }: {
    params: { token: string };
  }
) {
  const { token } = params;

  const user = await prisma.user.findFirst({
    where: {
      VerificationToken: {
        some: {
          AND: [
            {
              activatedAt: null,
            },
            {
              createdAt: {
                gt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 24 hours ago
              },
            },
            {
              token,
            },
          ],
        },
      },
    },
  });

  if (!user) {
    // create and redirect to error page here
    throw new Error("Token is invalid or expired");
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      verified: true,
    },
  });

  await prisma.verificationToken.update({
    where: {
      token,
    },
    data: {
      activatedAt: new Date(),
    },
  });

  redirect("/login");
}
