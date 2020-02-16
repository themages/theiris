const { BrowserWindow } = require("electron");
const path = require("path");
let win;
function create() {
    win = new BrowserWindow({
        width: 600,
        height: 300,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile(
        path.resolve(__dirname, "../../renderer/pages/control/index.html")
    );
}

function send(channel, ...args) {
    win.webContents.send(channel, ...args);
}

module.exports = { create, send };
