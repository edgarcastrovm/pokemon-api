const chai = require('chai')
const chaiHttp = require("chai-http")
const usersController = require('../controller/users')

chai.use(chaiHttp)

const app = require('../app').app

describe('Suit para pruebas de authenticación', () => {
    it('Should return 401 when no token available', (done) => {
        chai.request(app)
            .get('/team')
            .end((err, res) => {
                chai.assert.equal(res.statusCode, 401)
                done()
            })
    })
    it('Should return 200 when token is valid', (done) => {

        const data = {
            'userEmail': 'email@dominio.com',
            'userPassword': 'clave1234'
        }
        chai.request(app)
            .post('/login')
            .send(data)
            .end((err, res) => {
                chai.assert.equal(res.statusCode, 200)
                chai.request(app)
                    .get('/team')
                    .set('Authorization', `JWT ${res.body.token}`)
                    .end((err, res) => {
                        chai.assert.equal(res.statusCode, 200)
                        done()
                    })
            })
    })
    it('Should return 400 when missing data', (done) => {
        chai.request(app)
            .post('/login')
            .end((err, res) => {
                chai.assert.equal(res.statusCode, 400)
                done()
            })
    })
    it('Should return 400 when missing emil and password', (done) => {
        chai.request(app)
            .post('/login')
            .send({})
            .end((err, res) => {
                chai.assert.equal(res.statusCode, 400)
                done()
            })
    })
})