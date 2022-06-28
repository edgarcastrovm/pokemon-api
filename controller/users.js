const uuid = require('uuid')
const crypto = require('../crypto')

const usersDataBase = {}

const getUserByEmail = (email) => {
    for (let key in usersDataBase) {
        if (usersDataBase[key].userEmail == email) {
            return usersDataBase[key]
        }
    }
    return null
}

const checkUserCredentials = (userId, password) => {
    const user = usersDataBase[userId]
    return crypto.comparePasswords(password, user.userPassword)
}

const registerUser = (user) => {
    let userId = uuid.v4()
    usersDataBase[userId] = {
        'userId': userId,
        'userName': user.userName,
        'userEmail': user.userEmail,
        'userPassword': crypto.hashPassword(user.userPassword)
    }
    return usersDataBase[userId]
}

exports.getUserByEmail = getUserByEmail
exports.checkUserCredentials = checkUserCredentials
exports.registerUser = registerUser