import { serverConfig } from "../config"
import render from 'koa-ejs'

import router from "../router"

const logger = async (ctx, next) => {
    await next()
}

const timer = async (ctx, next) => {
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

export default (app) => {
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




