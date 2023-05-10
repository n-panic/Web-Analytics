import {prisma} from "~/prisma/db";

export default defineEventHandler(async (event) => {
    console.log("HAHAHAHA",prisma);
    // const body = await readBody(event);
    // await prisma.user.create({
    //     data: {
    //         username: body.username,
    //         email: body.email,
    //         password: body.password
    //     }
    // });
    // console.log(body);
    // return { body };
})
