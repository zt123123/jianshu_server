let { ArticleModel } = require("../db/model")

class HomeService {
    constructor() {

    }
    static async index() {
        let data = await ArticleModel.find({})
        return data
    }
}

module.exports = HomeService