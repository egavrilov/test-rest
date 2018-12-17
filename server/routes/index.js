const Router = require('koa-router');
const router = new Router();

router.get('/get', corsHeaders, getResponse);
router.get('/get/:code', corsHeaders, getResponse);

router.post('/post', corsHeaders, postResponse);
router.post('/post/:code', corsHeaders, postResponse);

router.options('*', corsHeaders);

function corsHeaders(ctx, next) {
  ctx.set('Access-Control-Allow-Origin', ctx.get('Origin') || '*');
  ctx.set('Access-Control-Allow-Credentials', true);
  ctx.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}

function getResponse(ctx) {
  ctx.status = Number(ctx.params.code) || 200;
  ctx.body = ctx.params.body || {
    message: 'Subscribe to Eugene! https://huncode.com'
  };
}

function postResponse(ctx) {
  const body = Object.keys(ctx.request.body).length ? ctx.request.body : ctx.request.rawBody;
  ctx.status = Number(ctx.params.code) || 200;
  ctx.body = {
    message: 'Subscribe to Eugene! https://huncode.com',
    body
  };
}

module.exports = function (app) {
  app
    .use(router.routes())
    .use(router.allowedMethods());
}
