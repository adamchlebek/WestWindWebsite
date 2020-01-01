var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

var dir = __dirname + "/public"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static(dir));

app.listen(process.env.PORT || 5000);

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(dir + '/index.html'));
});

app.get('/plans', (req, res) => {
    res.sendFile(path.join(dir + '/plans.html'));
});

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(dir + '/gallery.html'));
});

app.get('/amenities', (req, res) => {
    res.sendFile(path.join(dir + '/amenities.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(dir + '/contact.html'));
});