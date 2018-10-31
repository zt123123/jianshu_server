const Koa = require("koa")

let app = new Koa()

let middleWare = require("./middleware")
let initDB = require("./db")

initDB()
middleWare(app)

module.exports = app