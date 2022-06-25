const express = require('express')
const passport = require('passport')
require('./auth')(passport)

const app = express()
const port = 3000


app.get('/', (req,res)=>{
    res.status(200).send('Hola')
})
app.post('/team/pokemon', (req,res)=>{
    res.status(200).send('Hola')
})
app.get('/team', passport.authenticate('jwt',{session: false}),(req,res)=>{
    res.send('Hola')
})
app.delete('team/pokemon/:pokeid', (req,res)=>{
    res.status(200).send('Hola')
})
app.put('/item', (req,res)=>{
    res.send('Hola')
})
app.post('/login', (req,res)=>{
    res.status(200).json(
        {token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkVkZ2FyIENhc3RybyIsImlhdCI6MTUxNjIzOTAyMn0.h_H6FSIZE_0wEisNgBKw21-Fuh1vNPwGwSY83a9HUqQ'}
    )
})
app.listen(port,()=>{
    console.log('Server listen on port 3000')
})

exports.app = app
