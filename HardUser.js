// henter User typer model
const FreeUser = require('./Model/user')
const PaymentUser = require('./Model/user')

// hardcode af mine users 
let userArray = [];

let User1 = new PaymentUser ('Emil', 'Nielsen', 'Male', '120398', 'emilnielsen98@gmail.com', 'lilgangsta123', '120398-7877', 'Gaming, Byen, Netflix', 'Frida', '', 8923913212318743);
let User2 = new FreeUser ('Frida', 'Poulsen', 'Female', '120902', 'fridapoulsen02@gmail.com', 'emilsdame', '120902-9822', 'Netflix, Male, Tegne', 'Emil', '')

userArray = [User1, User2];

// eksporterer mine hardcode users 
module.exports = userArray; 
