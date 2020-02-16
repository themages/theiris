const { app } = require("electron");
const handleIPC = require("./ipc.js");
const { create: createMainWindow } = require("./windows/main");
// const { create: createControlWindow } = require("./windows/control");
app.on("ready", () => {
    createMainWindow();
    // createControlWindow();
    handleIPC();
    require("./robot")();
});
