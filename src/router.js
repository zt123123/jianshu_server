const Router = require('koa-router');
let HomeController = require("./controller/HomeController")

let router = new Router();

router.get('/', HomeController.index);

module.exports = router

