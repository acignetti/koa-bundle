import Koa from 'koa';

import router from './middlewares/router.js';

const app = new Koa();

app.use(router);

app.listen(3000);
