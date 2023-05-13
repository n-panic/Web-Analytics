import { prisma } from "~/prisma/db";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // auth the user
  const user = await prisma.user.findFirst({
    where: {
      email: body.email
    },
  });

  if (!user) {
    throw new Error("No user found");
  }

  const passwordMatch = await bcrypt.compare(body.password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid password");
  }

  return { success: true };
});
