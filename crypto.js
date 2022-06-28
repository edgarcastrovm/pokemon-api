const bcrypt = require('bcrypt')

const hashPassword = (passwordText) => {
    return bcrypt.hashSync(passwordText, 10)
}
const comparePasswords = (passwordText, passwordHash) => {
    return bcrypt.compareSync(passwordText, passwordHash)
}

exports.hashPassword = hashPassword
exports.comparePasswords = comparePasswords