const { dbConfig } = require("../config")

const mongoose = require('mongoose');

const url = `mongodb://${dbConfig.host}/${dbConfig.database}`


let initDB = () => {
    mongoose.connect(url, (err) => {
        if (err) {
            throw new Error("mongodb connect fail")
        }
        console.log("connect success");
    });
}

module.exports = initDB
