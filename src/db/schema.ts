import { Schema } from "mongoose"

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

export {
    topicSchema,
    articleSchema,
    tagSchema
}