console.log("in index.js");

const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');

// Restoring Window
const resBtn = document.getElementById('resBtn');

let colorWindow;
resBtn.addEventListener('click', function(event) {
    let winRestoring = new BrowserWindow(
        {
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true,
                backgroundColor: '#2C2C2C',
        }
    });
    
    winRestoring.loadURL(url.format({
        pathname: path.join(__dirname, 'Restoring.html'),
        protocol: 'file',
        slashes: true,
    }));

})


// Non Restoring Window
const nonResBtn = document.getElementById('nonResBtn');
nonResBtn.addEventListener('click', function(event) {
    let winNonRestoring = new BrowserWindow(
        {
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true,
                backgroundColor: '#2C2C2C',
        }
    });
    
    winNonRestoring.loadURL(url.format({
        pathname: path.join(__dirname, 'NonRestoring.html'),
        protocol: 'file',
        slashes: true
    }));

    // winNonRestoring.webContents.openDevTools();

})
