import {prisma} from "~/prisma/db";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    await prisma.stats.create({
        data: {
            gysSessionId: body.gysSessionId,
            events: body.events
        }
    });
    console.log(body);
    return { body };
})
