const Users = require('../HardUser')

function userController(req, res) {
    res.send(Users)
};

module.exports = userController; 