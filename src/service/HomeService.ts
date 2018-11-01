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

    public getUser(id: number): Promise<Article> {
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

    public getUsers(): Promise<Article[]> {
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

    public addArticle(id: number): Promise<Article> {
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



    public addUser(): Promise<Article> {
        return new Promise<Article>((resolve, reject) => {
            this.mongoClient.insert('articleList', {
                id: 5,
                title: "什么叫经典？奥迪30秒的创意广告，就把奔驰、宝马、沃尔沃气哭了！",
                desc: "今天分享一支老广告 但绝对是堪称经典 当你还在为可口可乐和百事可乐的世纪互黑 拍手叫绝时 奥迪却用一支30秒的广告将四个竞品气到哭 更多设计文章...",
                imgUrl: "https://static.nodeveloper.top/img/1.jpg"
            }, (error, data: Article) => {
                if (!error) {
                    resolve(data);
                } else {
                    reject(error)
                }
            });
        });
    }
}
