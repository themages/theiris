const { app } = require("electron");
const handleIPC = require("./ipc.js");
const { create: createMainWindow, show: showMainWindow, close: closeMainWindow } = require("./windows/main");

if(require("electron-squirrel-startup")) return app.quit();

const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
    app.quit();
} else {
    app.on("second-instance", (event, commandLine, workingDirectory) => {
        showMainWindow();
    });
    app.on("will-finish-launching", () => {
        require("./update");
    })
    app.on("ready", () => {
        createMainWindow();
        handleIPC();
        require("./trayAndMenu/");
        require("./robot")();
    });
    app.on("before-quit", () => {
        closeMainWindow();
    });
    app.on("activate", () => {
        showMainWindow();
    });
}
