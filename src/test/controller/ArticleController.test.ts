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
    public findOneById(collection, filter, result: (error, data) => void) {
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

    public update(collection, objectId, model, result: (error, data) => void) {
        return result(null, {
            email: 'changed@changed.com',
            name: 'Lorem'
        });
    }

    public remove(collection, objectId, result: (error, data) => void) {
        return result(null, 'Lorem');
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
                    id: 1,
                    email: 'lorem@ipsum.com',
                    name: 'Lorem'
                }, {
                    id: 2,
                    email: 'doloe@sit.com',
                    name: 'Dolor'
                }]
            );

            done();
        }).catch(err => {
            console.log(err);
        })
    });

    it('should get the right article', (done) => {
        controller.getArticle("1").then((data) => {
            expect(data).to.deep.equal({
                id: 1,
                email: 'lorem@ipsum.com',
                name: 'Lorem'
            });

            done();
        }).catch(err => {
            console.log(err);
        })
    });

    it('should add new article', (done) => {
        controller.addArticle(
            {
                id: 6,
                email: '666@666.com',
                name: '666'
            }
        ).then((data) => {
            expect(data).to.deep.equal({
                id: 6,
                email: '666@666.com',
                name: '666'
            });

            done();
        }).catch(err => {
            console.log(err);
        })
    });

    it('should update article', (done) => {
        controller.updateArticle("1").then((data) => {
            expect(data).to.deep.equal({
                id: 1,
                email: 'lorem@ipsum.com',
                name: 'Lorem'
            });

            done();
        }).catch(err => {
            console.log(err);
        })
    });

    it('should remove article', (done) => {
        controller.removeArticle("1").then((data) => {
            expect(data).to.deep.equal({
                id: 1,
                email: 'lorem@ipsum.com',
                name: 'Lorem'
            });

            done();
        }).catch(err => {
            console.log(err);
        })
    });
});