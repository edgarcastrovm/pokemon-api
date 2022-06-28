const express = require('express')
const passport = require('passport')
const userController = require('./controller/users')
const bodyParser = require('body-parser')
const config = require('./config/config')
const jwt = require('jsonwebtoken');

require('./auth')(passport)
const app = express()
app.use(bodyParser.json())
const port = 3000


const user = userController.registerUser({
    userName: 'Edgar Castro',
    userEmail: 'email@dominio.com',
    userPassword: 'clave1234'
})

app.get('/', (req, res) => {
    res.status(200).send('Hola')
})
app.post('/team/pokemon', (req, res) => {
    res.status(200).send('Hola')
})
app.get('/team', passport.authenticate('jwt',{ session: false }), (req, res) => {
    res.status(200).send('Hola')
})
app.delete('team/pokemon/:pokeid', (req, res) => {
    res.status(200).send('Hola')
})
app.put('/item', (req, res) => {
    res.send('Hola')
})
app.post('/login', (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: 'Missing data' })
    }
    if (!req.body.userEmail || !req.body.userPassword) {
        return res.status(400).json({ message: 'Missing data' })
    }
    const user = userController.getUserByEmail(req.body.userEmail)
    if (!user) {
        return res.status(400).json({ message: 'User invalid' })
    }
    let data = userController.checkUserCredentials(user.userId, req.body.userPassword)
    if (data) {
        const token = jwt.sign({ userId: user.userId }, config.getSecretKey())
        return res.status(200).json({ token: token })
    } else {
        return res.status(400).json({ message: 'User invalid' })
    }
})
app.listen(port, () => {
    console.log('Server listen on port 3000')
})

exports.app = app
