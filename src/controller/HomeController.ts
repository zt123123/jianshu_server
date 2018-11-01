import {
    interfaces,
    controller,
    httpGet,
    httpPost,
    requestParam,
    requestBody,
} from 'inversify-koa-utils';

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
    public async addArticle(@requestBody() article: Article): Promise<Article> {
        if (article && article.id) {
            return await this.homeService.addArticle(article);
        }
    }
}

export default HomeController