const { app } = require("electron");
const handleIPC = require("./ipc.js");
const { create: createMainWindow, show: showMainWindow, close: closeMainWindow } = require("./windows/main");
// const { create: createControlWindow } = require("./windows/control");
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
    app.quit();
} else {
    app.on("second-instance", (event, commandLine, workingDirectory) => {
        showMainWindow();
    });
    app.on("ready", () => {
        createMainWindow();
        // createControlWindow();
        handleIPC();
        require("./robot")();
    });
    app.on("before-quit", () => {
        closeMainWindow();
    });
    app.on("activate", () => {
        showMainWindow();
    })
}
