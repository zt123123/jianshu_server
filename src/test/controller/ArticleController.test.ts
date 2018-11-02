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
        }, {
            id: 3,
            email: 'test@test.com',
            name: 'test'
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

    public update(collection, id, model, result: (error, data) => void) {
        return result(null, {
            email: 'changed@changed.com',
            name: 'Lorem'
        });
    }

    public remove(collection, objectId, result: (error, data) => void) {
        return result(null, 1);
    }
}


describe('ArticleController', () => {
    let controller;

    beforeEach(() => {
        controller = new ArticleController(new ArticleService(new MongoDBClientMock()));
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
                id: 3,
                email: 'test@test.com',
                name: 'test'
            }
        ).then((data) => {
            expect(data).to.deep.equal({
                id: 3,
                email: 'test@test.com',
                name: 'test'
            });

            done();
        }).catch(err => {
            console.log(err);
        })
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
                }, {
                    id: 3,
                    email: 'test@test.com',
                    name: 'test'
                }]
            );

            done();
        }).catch(err => {
            console.log(err);
        })
    });


    it('should update article', (done) => {
        controller.updateArticle("1", {
            email: 'changed@changed.com',
            name: 'Lorem'
        }).then((data) => {
            expect(data).to.deep.equal({
                email: 'changed@changed.com',
                name: 'Lorem'
            });

            done();
        }).catch(err => {
            console.log(err);
        })
    });

    it('should remove article', (done) => {
        controller.removeArticle("1").then((data) => {
            expect(data).to.deep.equal(1);

            done();
        }).catch(err => {
            console.log(err);
        })
    });
});