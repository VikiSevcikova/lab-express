const fs = require('fs');

let textFromFile;
async function readFile() {
    try {
        const data =  fs.readFileSync('files/fspage.txt', 'utf8');
        textFromFile = data;
    } catch (err) {
        console.error(err)
    }
}

readFile();

const page = `
<!DOCTYPE html>
<html>
    <head>
        <title>Dashboard</title>
    </head>
    <style>
        h1{text-align: center;}
        table{width:100%;border-collapse: collapse;}
        table th, table td{ border: 1px solid #ddd; padding: 8px; }
    </style>
    <body>
        <h1>FS Module</h1>
        <p>${textFromFile}</p>
        <a href="/">Return to Main Page</a>
    </body>
</html>
`
exports.getPage = () => {
    return page;
}