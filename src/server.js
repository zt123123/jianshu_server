let app = require("./app")
let { serverConfig } = require("./config")

app.listen(serverConfig.port, () => {
    console.log(`server start at http://localhost:${serverConfig.port}`);
})