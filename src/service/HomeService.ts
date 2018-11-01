import { inject, injectable } from 'inversify';
import { MongoDBClient } from '../utils/mongodb/client';
import { Article } from '../model';
import TYPES from '../constant/types';

@injectable()
export default class UserService {
    private mongoClient: MongoDBClient;

    constructor(
        @inject(TYPES.MongoDBClient) mongoClient: MongoDBClient
    ) {
        this.mongoClient = mongoClient;
    }

    public getUsers(): Promise<Article[]> {
        return new Promise<Article[]>((resolve, reject) => {
            this.mongoClient.find('user', {}, (error, data: Article[]) => {
                resolve(data);
            });
        });
    }

    public getUser(id: string): Promise<Article> {
        return new Promise<Article>((resolve, reject) => {
            this.mongoClient.findOneById('user', id, (error, data: Article) => {
                resolve(data);
            });
        });
    }

    public newUser(user: Article): Promise<Article> {
        return new Promise<Article>((resolve, reject) => {
            this.mongoClient.insert('user', user, (error, data: Article) => {
                resolve(data);
            });
        });
    }
}
