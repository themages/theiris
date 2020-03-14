process.on("uncaughtException", function(error) {
    console.error(error.stack || JSON.stringify(error));
});