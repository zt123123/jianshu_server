let { serverConfig } = require("../config")
const render = require('koa-ejs');

let router = require("../router")

const logger = async (ctx, next) => {
    console.log("logger")
    await next()
}

const timer = async (ctx, next) => {
    console.log(new Date().toLocaleString())
    await next()
}

const json = async (ctx, next) => {
    let _this = ctx
    ctx.json = (json) => {
        _this.set("Content-Type", "application/json")
        _this.body = JSON.stringify(json)
    }
    await next()
}

module.exports = (app) => {
    render(app, {
        root: serverConfig.staticRoot,
        layout: false,
        viewExt: 'html',
        cache: false,
        debug: false
    });

    app.use(logger)
        .use(timer)
        .use(json)
        .use(router.routes())
        .use(router.allowedMethods())
}




