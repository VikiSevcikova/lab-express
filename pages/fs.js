const fs = require('fs');
const formidable = require('formidable');

//delete file 
try{
    fs.unlinkSync('files/fspage2.txt');
}catch(err){
    console.log(err);
}finally{
    console.log('file was deleted');
}

//these fs functions are synchronous
const textFromFile =  fs.readFileSync('files/fspage.txt', 'utf8');
fs.writeFileSync('files/fspage2.txt', 'This is text from fspage2.txt file.');
let textFromFile2 = fs.readFileSync('files/fspage2.txt', 'utf8');
console.log("After first write: "+textFromFile2);

//for async we need 3rd param and it is callback function with 2 params error and data
fs.readFile('files/fspage.txt', 'utf8', function (err, data){
    if(err){
        console.error(err);
    }else{
        fs.appendFile('files/fspage2.txt', data+'  Written with async functions', function(err){
            if(err){
                console.log(err);
            }else{
                console.log('finished writing');
                textFromFile2 = fs.readFileSync('files/fspage2.txt', 'utf8');
                console.log('Async: '+textFromFile2);
            }
        });
    }
});

console.log("After second write: "+textFromFile2);

const page = `
<!DOCTYPE html>
<html>
    <head>
        <title>Dashboard</title>
    </head>
    <style>
        h1{text-align: center;}
    </style>
    <body>
        <h1>FS Module</h1>
        <p>${textFromFile}</p>
        <p>${textFromFile2}</p>
        <a href="/fs/upload"><button>Uload File</button></a>
        </br>
        <a href="/">Return to Main Page</a>
    </body>
</html>
`
exports.getPage = () => {
    return page;
}