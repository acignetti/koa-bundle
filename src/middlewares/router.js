import helloWorld from "../actions/helloWorld.js";
import filterUsers from "../actions/filterUsers.js";

const ROUTES = {
    "/": helloWorld,
    "/users": filterUsers,
}

export default async (ctx, next) => {
    await next();
    console.log(`${ctx.method} - ${ctx.url}`)
    if (ctx.path in ROUTES) {
        ROUTES[ctx.path](ctx)
    }
}