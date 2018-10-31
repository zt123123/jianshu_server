const mongoose = require("mongoose")
let Schema = mongoose.Schema

const topicSchema = new Schema({
    id: Number,
    title: String,
    imgUrl: String
});

const articleSchema = new Schema({
    id: Number,
    title: String,
    desc: String,
    imgUrl: String
});

const tagSchema = new Schema({
    id: Number,
    label: String,
});

module.exports = {
    topicSchema,
    articleSchema,
    tagSchema
}