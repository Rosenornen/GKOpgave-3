const express = require ('express')
const app = express()
const port = 3000
app.listen(port, () => {
    console.log(`Server-applikation lytter på http://localhost:${port}`)
  })

// henter controllers 
const UserController = require('./Controller/UserController')
const UserInterestController = require('./Controller/InterestController')
const UserMatchController = require('./Controller/UserMatchController')

// read endpoint på routen for User
app.get('/UserInformation', UserController)
app.post('/UserInformation', (reg, res) => {
    res.send('Post Request til User');
});
app.put('/UserInformation', (reg, res) => {
    res.send('Put Request til User');
});
app.delete('/UserInformation', (reg, res) => {
    res.send('Delete Request til User');
});

// read endpoint på routen for Match
app.get('.UserInformation/Matches', (reg, res) => {
    res.send('Get Post til Matches')
});
app.put('.UserInformation/Matches', UserMatchController)
app.delete('.UserInformation/Matches', (reg, res) => {
    res.send('Delete Request til Matches')
});

// read endpoint på routen for Interest 
app.get('/UserInformation/Interest', UserInterestController)
app.post('.UserInformation/Interest', (reg, res) => {
    res.send('Post Request til Interest')
});
app.put('.UserInformation/Interest', (reg, res) => {
    res.send('Put Request til Interest')
});
app.delete('.UserInformation/Interest', (reg, res) => {
    res.send('Delete Request til Interest')
});





