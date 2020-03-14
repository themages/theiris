const { app } = require("electron");
const handleIPC = require("./ipc.js");
const { create: createMainWindow, show: showMainWindow, close: closeMainWindow } = require("./windows/main");

const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
    app.quit();
} else {
    app.on("second-instance", (event, commandLine, workingDirectory) => {
        showMainWindow();
    });
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
