let HomeService = require("../service/HomeService")

class HomeController {
    constructor() {

    }
    static async index(ctx) {
        let res = await HomeService.index()
        await ctx.render('index', { res });
    }
}
module.exports = HomeController