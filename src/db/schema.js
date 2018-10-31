const mongoose = require("mongoose")

const topicSchema = mongoose.Schema({
    id: Number,
    title: String,
    imgUrl: String
});

const articleSchema = mongoose.Schema({
    id: Number,
    title: String,
    desc: String,
    imgUrl: String
});

const tagSchema = mongoose.Schema({
    id: Number,
    label: String,
});

module.exports = {
    topicSchema,
    articleSchema,
    tagSchema
}