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
import ArticleService from '../service/ArticleService';
import TYPES from '../constant/types';

@controller('/article')
@injectable()
class ArticleController implements interfaces.Controller {
    constructor(
        @inject(TYPES.ArticleService) private ArticleService: ArticleService
    ) { }

    @httpGet('/')
    public getArticles(): Promise<Article[]> {
        return this.ArticleService.getArticles();
    }

    @httpGet('/:id')
    public async getArticle(@requestParam("id") id: string): Promise<Article> {
        return await this.ArticleService.getArticle(parseInt(id));
    }

    @httpPost('/del/:id')
    public async removeArticle(@requestBody() id: number): Promise<Article> {
        return await this.ArticleService.removeArticle(id);
    }

    @httpPost('/update')
    public async updateArticle(@requestBody() article: Article, @requestBody() id: number): Promise<Article> {
        if (article && article.id) {
            return await this.ArticleService.updateArticle(id, article);
        }
    }

    @httpPost('/add')
    public async addArticle(@requestBody() article: Article): Promise<Article> {
        if (article && article.id) {
            return await this.ArticleService.addArticle(article);
        }
    }
}

export default ArticleController