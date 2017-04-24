const koa = require('koa');
const middleware = require('./middleware');
const routes = require('./routes');
const app = new koa();

app.use(middleware());
routes(app);

module.exports = app;
