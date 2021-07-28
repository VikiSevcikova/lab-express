const os = require('os');

let utS = Math.floor(os.uptime())%60;
let utM = Math.floor(utS/60)%60;
let utH = Math.floor(utM/60)%60;

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
        <h1>Dashboard</h1>
        <table>
        <tr>
            <th>Property</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>Platform</td>
            <td>${os.platform()}</td>
        </tr>
        <tr>
            <td>Architecture</td>
            <td>${os.arch()}</td>
        </tr>
        <tr>
            <td>OS</td>
            <td>${os.type()}</td>
        </tr>
        <tr>
            <td>Cpu</td>
            <td>${os.cpus()[0].model} ${os.cpus().length} cores</td>
        </tr>
        <tr>
            <td><a href="endiannes">Endiannes</a></td>
            <td>${os.endianness()}</td>
        </tr>
        <tr>
            <td>Free System Memory</td>
            <td>${os.freemem()}</td>
        </tr>
        <tr>
            <td>Home Directory</td>
            <td>${os.homedir()}</td>
        </tr>
        <tr>
            <td>Temporary Directory</td>
            <td>${os.tmpdir()}</td>
        </tr>
        <tr>
            <td>Host Name</td>
            <td>${os.hostname()}</td>
        </tr>
        <tr>
            <td>Network Interfaces</td>
            <td>
                <ul>
                    ${Object.keys(os.networkInterfaces()).map((key)=>`<li>${key}: ${os.networkInterfaces()[key][0].address} ${os.networkInterfaces()[key][0].family}</li>`).join("")}
                </ul>
            </td>
        </tr>
        <tr>
            <td>Up Time</td>
            <td>
               ${utH}:${utM}:${utS}
            </td>
        </tr>
        </table>
        <a href="/">Return to Main Page</a>
    </body>
</html>
`
exports.getPage = () => {
    return page;
}