let HomeService = require("../service/HomeService")

class HomeController {
    constructor() {

    }
    static async index(ctx) {
        let res = await HomeService.index()
        ctx.json({ errcode: 0, errmsg: "ok", data: res })
    }
}
module.exports = HomeController