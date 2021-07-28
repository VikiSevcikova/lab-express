const express = require('express');
const ejs = require('ejs');
const path = require('path');
const dashboard = require('./pages/dashboard');
const functionsAssert = require('./pages/functionsAssert');
const fs = require('./pages/fs');
const formidable = require('formidable');

const app = express();
const port = 3000;

//configure() is no longer part of Express
app.set('views', __dirname+'/pages');
app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {title: 'Main Page'});
});

app.get('/dashboard', (req, res) => {
    res.send(dashboard.getPage());
});

app.get('/endiannes', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/endiannes.html'));
});

app.get('/assert', (req, res) => {
    res.send(functionsAssert.getPage());
});

app.get('/fs', (req, res) => {
    res.send(fs.getPage());
});

app.get('/fs/upload', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/upload.html'));
})

app.post('/fs/upload', (req, res, next) => {
    const form = new formidable.IncomingForm();
    const folder = path.join(__dirname, 'files');
    form.maxFileSize = 50 * 1024 * 1024; // 5MB
    form.uploadDir = folder;
    form.parse(req)

    form.on('fileBegin', function(name, file){
        let fileType = file.type.split('/').pop();
        if(fileType != 'txt'){
            console.error( 'incorrect file type: ' + fileType );
            return;
        }
    });
    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });
    res.send(fs.getPage());
});

app.listen(port, () => console.log('Listening to port: ', port));