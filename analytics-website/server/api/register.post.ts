import { prisma } from "~/prisma/db";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const hashedPassword = await bcrypt.hash(body.password, 10);
  await prisma.user.create({
    data: {
      username: body.username,
      email: body.email,
      password: hashedPassword,
    },
  });
  return { body };
});
