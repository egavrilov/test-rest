const compose = require('koa-compose');
const bodyparser = require('koa-bodyparser');

module.exports = function middleware() {
  return compose([
    bodyparser()
  ]);
};
