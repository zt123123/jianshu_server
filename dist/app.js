"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_koa_utils_1 = require("inversify-koa-utils");
require("reflect-metadata");
var inversify_1 = require("inversify");
var client_1 = require("./utils/mongodb/client");
var types_1 = require("./constant/types");
var HomeController_1 = require("./controller/HomeController");
var HomeService_1 = require("./service/HomeService");
var container = new inversify_1.Container();
container.bind(types_1.default.MongoDBClient).to(client_1.MongoDBClient);
container.bind(inversify_koa_utils_1.TYPE.Controller).to(HomeController_1.default).whenTargetNamed('HomeController');
container.bind(types_1.default.HomeService).to(HomeService_1.default);
var server = new inversify_koa_utils_1.InversifyKoaServer(container);
// server.setConfig((app) => {
//     app.use(logger)
//         .use(timer)
//         .use(json)
// });
var app = server.build();
exports.default = app;
