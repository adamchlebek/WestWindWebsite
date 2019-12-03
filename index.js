const express = require('express');
const app = express();
var path = require('path');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: false }));
app.use('/assets', express.static('assets'));

const server = app.listen(process.env.PORT || 4200, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/plans', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/plans.html'));
});

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/gallery.html'));
});

app.get('/amenities', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/amenities.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/contact.html'));
});