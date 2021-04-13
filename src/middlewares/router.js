import helloWorld from "../actions/helloWorld.js"

const ROUTES = {
    '/': helloWorld,
}

export default async (ctx, next) => {
    await next();
    if (ctx.url in ROUTES) {
        ROUTES[ctx.url](ctx)
    }
}