const render = require('koa-ejs');
const path = require("path")

let app = require("./app")
let router = require("./router")
let { serverConfig } = require("./config")
let { logger, timer } = require("./middleware")

let initDB = require("./db")
initDB()

render(app, {
    root: serverConfig.staticRoot,
    layout: false,
    viewExt: 'html',
    cache: false,
    debug: false
});

app.use(logger)
app.use(timer)

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(serverConfig.port, () => {
    console.log(`server start at http://localhost:${serverConfig.port}`);
})