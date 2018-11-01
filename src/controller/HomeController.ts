import {
    interfaces,
    controller,
    httpGet,
    httpPost,
    requestParam,
    queryParam,
    requestBody,
    request
} from 'inversify-koa-utils';

import { Request } from "koa"

import { inject, injectable } from 'inversify';
import { Article } from '../model/index';
import HomeService from '../service/HomeService';
import TYPES from '../constant/types';

@controller('/article')
@injectable()
class HomeController implements interfaces.Controller {
    constructor(
        @inject(TYPES.HomeService) private homeService: HomeService
    ) { }

    @httpGet('/')
    public getUsers(): Promise<Article[]> {
        return this.homeService.getUsers();
    }

    @httpGet('/:id')
    public async getUser(@requestParam("id") id: string): Promise<Article> {
        return await this.homeService.getUser(parseInt(id));
    }

    @httpPost('/')
    public async addArticle(@request("req") request: any): Promise<Article> {
        console.log(request);
        return await this.homeService.addArticle(2);
    }
}

export default HomeController