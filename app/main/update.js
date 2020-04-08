const { autoUpdater, app, dialog } = require("electron");

if(process.platform === "darwin") {
    autoUpdater.setFeedURL("http://120.24.162.36:9999/darwin?version=" + app.getVersion());
} else if (process.platform === "win32") {
    autoUpdater.setFeedURL("http://120.24.162.36:9999/win32?version=" + app.getVersion());
}

autoUpdater.checkForUpdates();

autoUpdater.on("update-available", () => {
    console.log("update-available");
});

autoUpdater.on("update-downloaded", () => {
    app.whenReady().then(() => {
        let clickId = dialog.showMessageBoxSync({
            type: "info",
            title: "升级提示",
            message: "已为你升级到最新版本，是否立即体验",
            buttons: ["马上升级", "手动重启"],
            cancelId: 1
        });
        if (clickId === 0) {
            autoUpdater.quitAndInstall();
            app.quit();
        };
    });
});

autoUpdater.on("error", (err) => {
    console.error("error", err);
});
