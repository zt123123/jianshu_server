import { expect } from 'chai';
import ArticleController from '../../controller/ArticleController';
import ArticleService from '../../service/ArticleService';

class MongoDBClientMock {
    public db;

    public find(collection, filter, result: (error, data) => void) {
        return result(null, [{
            id: 1,
            email: 'lorem@ipsum.com',
            name: 'Lorem'
        }, {
            id: 2,
            email: 'doloe@sit.com',
            name: 'Dolor'
        }]);
    }
    public findOneById(collection, objectId, result: (error, data) => void) {
        return result(null, {
            id: 1,
            email: 'lorem@ipsum.com',
            name: 'Lorem'
        });
    }

    public insert(collection, model, result: (error, data) => void) {
        return result(null, {
            id: 3,
            email: 'test@test.com',
            name: 'test'
        });
    }
}


describe('ArticleController', () => {
    let controller;

    beforeEach(() => {
        controller = new ArticleController(new ArticleService(new MongoDBClientMock()));
    });
    it('should get all articles', (done) => {
        controller.getArticles().then((data) => {
            expect(data).to.deep.equal(
                [{
                    email: 'lorem@ipsum.com',
                    name: 'Lorem'
                }, {
                    email: 'doloe@sit.com',
                    name: 'Dolor'
                }]
            );

            done();
        });
    });

    it('should get the right article', (done) => {
        controller.getArticle('1').then((data) => {
            expect(data).to.deep.equal({
                email: 'lorem@ipsum.com',
                name: 'Lorem'
            });

            done();
        });
    });
});