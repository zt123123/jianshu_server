import { dbConfig } from "../config"

import mongoose from 'mongoose'

const url = `mongodb://${dbConfig.host}/${dbConfig.database}`


let initDB = () => {
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        if (err) {
            throw new Error("mongodb connect fail")
        }
    });
}

export default initDB
