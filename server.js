const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/api', function (req, res) {
    res.send('Hello from api. hiusdfahjfsadjkds')
})

app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + PORT);
});