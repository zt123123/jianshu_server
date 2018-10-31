const request = require('supertest');
const app = require('../app');

describe('#test koa app', () => {

    let server = app.listen(30001);

    describe('#test server', () => {
        it('#test GET /', (done) => {
            request(server)
                .get('/')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    if (err) throw err;
                    done()
                    process.exit()
                });
        });
    });
});