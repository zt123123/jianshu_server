import { interfaces, InversifyKoaServer, TYPE } from 'inversify-koa-utils';
import 'reflect-metadata';
import { Container } from 'inversify';

import HomeController from "./controller/HomeController";
import HomeService from "./service/HomeService";

let container = new Container();

// import middleWare from "./middleware"
// import initDB from "./db"



container.bind<interfaces.Controller>(TYPE.Controller).to(HomeController).whenTargetNamed('HomeController');
container.bind<HomeService>('FooService').to(HomeService);

let server = new InversifyKoaServer(container);

let app = server.build();

// initDB()
// middleWare(app)

export default app