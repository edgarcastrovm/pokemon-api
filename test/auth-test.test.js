const chai = require('chai')
const chaiHttp = require("chai-http")

chai.use(chaiHttp)

const app = require('../app').app

describe('Suit para pruebas de authenticación', ()=>{
    it('Should return 401 when no token available',(done)=>{
        chai.request(app)
        .get('/team')
        .end((err,res) =>{
            chai.assert.equal(res.statusCode,401)
            done()
        })
    })
    it('Should return 200 when token is valid',(done)=>{
        chai.request(app)
        .post('/login')
        .end((err,res) =>{
            console.log(res.body.token)
            chai.request(app)
            .get('/team')
            .set('Authorization',`JWT ${res.body.token}` )
            .end((err,res2) =>{
                chai.assert.equal(res2.statusCode,200)
                done()
            })
        })
    })
})