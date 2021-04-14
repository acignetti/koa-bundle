import status from "../actions/status.js";
import filterUsers from "../actions/filterUsers.js";

const ROUTES = {
  "/": status,
  "/users": filterUsers,
};

export default async (ctx, next) => {
  await next();
  console.log(`${ctx.method} - ${ctx.url}`);
  if (ctx.path in ROUTES) {
    ROUTES[ctx.path](ctx);
  }
};
