import Koa from "koa";

import router from "./middlewares/router.js";
import auth from "./middlewares/auth.js";

const app = new Koa();

app.use(auth);
app.use(router);

app.listen(3000);
