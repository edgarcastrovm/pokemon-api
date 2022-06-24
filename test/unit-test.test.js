const assert = require('chai').assert

function suma(b,c){
    return b+c
}

describe('Suit de prueba para el curso',()=>{
    it('Test suma 2 numeros',()=>{
        let a = suma(3,6) 
        assert.equal(a,9)
    })
})