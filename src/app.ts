import { interfaces, InversifyKoaServer, TYPE } from 'inversify-koa-utils';
import 'reflect-metadata';
import { Container } from 'inversify';
const bodyParser = require('koa-bodyparser')

import { MongoDBClient } from './utils/mongodb/client';

import TYPES from './constant/types';

import ArticleController from "./controller/ArticleController";
import HomeController from "./controller/HomeController";
import ArticleService from "./service/ArticleService";
import HomeService from "./service/HomeService";

let container = new Container();

import { logger, timer, json } from "./middleware"

container.bind<MongoDBClient>(TYPES.MongoDBClient).to(MongoDBClient);
container.bind<interfaces.Controller>(TYPE.Controller).to(ArticleController).whenTargetNamed('ArticleController');
container.bind<interfaces.Controller>(TYPE.Controller).to(HomeController).whenTargetNamed('HomeController');

container.bind<ArticleService>(TYPES.ArticleService).to(ArticleService);
container.bind<HomeService>(TYPES.HomeService).to(HomeService);

let server = new InversifyKoaServer(container);

server.setConfig((app) => {
    app.use(logger)
        .use(timer)
        .use(json)
        .use(bodyParser())
});

let app = server.build();
export default app