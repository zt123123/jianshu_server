let logger = async (ctx, next) => {
    console.log("logger")
    await next()
}

let timer = async (ctx, next) => {
    console.log(new Date().toLocaleString())
    await next()
}

module.exports = {
    logger,
    timer
}