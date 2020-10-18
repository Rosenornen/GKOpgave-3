// henter mine hardcode user
const UserArray = require('../HardUser');
let User1 = UserArray[0]
let User2 = UserArray[1]

// controller
function UserInterests (req, res){
    res.send('User 1 interests: ' + User1.interest + '\n User 2 interests: ' + User2.interest)
}

// eksporterer min controller 
module.exports = UserInterests

