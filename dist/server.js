"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var server_1 = require("./config/server");
app_1.default.listen(server_1.port, function () {
    console.log("server start at http://localhost:" + server_1.port);
});
