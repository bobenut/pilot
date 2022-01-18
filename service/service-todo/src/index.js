const config = require('config');
const Koa = require('koa');
const router = require('./infra/routerWrapper');
const cors = require('koa-cors2');
const logger = require('koa-logger');
require('./router');

const app = new Koa();

app.use(logger());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
console.log(`NODE_ENV=${process.env.NODE_ENV}`);
console.log(`SERVICE_TODO_PORT=${process.env.SERVICE_TODO_PORT}`);
console.log(`config.port=${config.port}`);
const port = process.env.SERVICE_TODO_PORT || config.port;
app.listen(port, () => {
  console.log(`server started @ port:${port}`)
});