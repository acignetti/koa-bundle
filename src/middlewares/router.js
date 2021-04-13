import helloWorld from "../actions/helloWorld.js";
import filterUsers from "../actions/filterUsers.js";

const ROUTES = {
    "/": helloWorld,
    "/users": filterUsers,
}

export default async (ctx, next) => {
    await next();
    if (ctx.url in ROUTES) {
        ROUTES[ctx.url](ctx)
    }
}