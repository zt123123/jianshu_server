import { inject, injectable } from 'inversify';
import { MongoDBClient } from '../utils/mongodb/client';
import { Article } from '../model';
import TYPES from '../constant/types';

@injectable()
export default class HomeService {
    private mongoClient: MongoDBClient;

    constructor(
        @inject(TYPES.MongoDBClient) mongoClient: MongoDBClient
    ) {
        this.mongoClient = mongoClient;
    }

    public getArticle(id: number): Promise<Article> {
        return new Promise<Article>((resolve, reject) => {
            this.mongoClient.find('articleList', { id }, (error, data: Article) => {
                if (!error) {
                    resolve(data);
                } else {
                    reject(error)
                }
            });
        });
    }

    public getArticles(): Promise<Article[]> {
        return new Promise<Article[]>((resolve, reject) => {
            this.mongoClient.find('articleList', {}, (error, data: Article[]) => {
                if (!error) {
                    resolve(data);
                } else {
                    reject(error)
                }
            });
        });
    }

    public addArticle(article: Article): Promise<Article> {
        return new Promise<Article>((resolve, reject) => {
            this.mongoClient.insert('articleList', article, (error, data: Article) => {
                if (!error) {
                    resolve(data);
                } else {
                    reject(error)
                }
            });
        });
    }
}
