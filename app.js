const express = require('express')
const app = express()
const port = 3000

app.post('/team/pokemon', (req,res)=>{
    res.send('Hola')
})
app.get('/team', (req,res)=>{
    res.send('Hola')
})
app.delete('team/pokemon/:pokeid', (req,res)=>{
    res.send('Hola')
})
app.PUT('/item', (req,res)=>{
    res.send('Hola')
})
app.post('/', (req,res)=>{
    res.send('Hola')
})
app.listen(port,()=>{
    console.log('Server listen on port 3000')
})