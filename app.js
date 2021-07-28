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
    res.render('endiannes', {title: 'What is Endiannes'});
});

app.get('/assert', (req, res) => {
    res.send(functionsAssert.getPage());
});

app.get('/fs', (req, res) => {
    res.send(fs.getPage());
});

app.post('/fs/upload', (req, res, next) => {
    const form = new formidable.IncomingForm();
    let uploadFolder = path.join(__dirname, 'files')
    form.maxFileSize = 50 * 1024 * 1024; // 5MB
    form.uploadDir = uploadFolder;
    form.parse(req, function(err, fields, files){
        let oldPath = files.textFile.path;
        let uploadFolder = path.join(__dirname, 'files')
                + '/'+files.profilePic.name
        let rawData = fs.readFileSync(oldPath)
              
        fs.writeFile(uploadFolder, rawData, function(err){
            if(err) console.log(err)
            return res.send("Successfully uploaded")
        })
  })
});

app.listen(port, () => console.log('Listening to port: ', port));