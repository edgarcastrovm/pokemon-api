const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

const app = require('../app').app


describe('Suit de prueba e2e para el curso',()=>{
    it('should return Hola',(done)=>{
        chai.request(app)
        .get('/')
        .end((err,res)=>{
            chai.assert.equal(res.text,'Hola')
            done()
        })
    })
})