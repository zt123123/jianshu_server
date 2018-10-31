const mongoose = require("mongoose")

let {
    articleSchema,
    topicSchema,
    tagSchema
} = require("./schema")

let ArticleModel = mongoose.model("Article", articleSchema, "articleList")
let TopicModel = mongoose.model("Topic", topicSchema, "topicList")
let TagModel = mongoose.model("Tag", tagSchema, "tag")

module.exports = {
    ArticleModel,
    TopicModel,
    TagModel
}


