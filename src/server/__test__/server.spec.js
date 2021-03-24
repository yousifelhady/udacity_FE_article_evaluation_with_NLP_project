const request = require('supertest')
const app = require("../index")

describe('Testing server endpoints', () => {
    
    test('testing GET /test endpoint', () => {
        request(app)
        .get('/test')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
        });
    })

    test('testing POST /add-url endpoint', (done) => {
        request(app)
        .post('/add-url')
        .send({url: "https://jamesclear.com/journaling-one-sentence"})
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    })
})