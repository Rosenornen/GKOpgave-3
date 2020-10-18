const UserArray = require("../HardUser");
let User1 = UserArray[0];
let User2 = UserArray[1];

function UserMatchController (req, res){
    res.send('User 1 match: ' + User1.match + '\n User 2 match: ' + User2.match)
}

module.exports = UserMatchController