import {prisma} from "~/prisma/db";

export default defineEventHandler(async (event) => {
    const test = await prisma.user.findMany();
    return { test };
})
