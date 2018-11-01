import { model } from "mongoose"

import {
    articleSchema,
    topicSchema,
    tagSchema
} from "./schema"

let ArticleModel = model("Article", articleSchema, "articleList")
let TopicModel = model("Topic", topicSchema, "topicList")
let TagModel = model("Tag", tagSchema, "tag")

export {
    ArticleModel,
    TopicModel,
    TagModel
}


