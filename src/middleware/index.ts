export const logger = async (ctx, next) => {
    console.log(ctx.request.url);
    await next()
}

export const timer = async (ctx, next) => {
    console.log(new Date().toLocaleString());
    await next()
}

export const json = async (ctx, next) => {
    let _this = ctx
    ctx.json = (json) => {
        _this.set("Content-Type", "application/json")
        _this.body = JSON.stringify(json)
    }
    await next()
}