const { crashReporter } = require("electron");

function init() {
    crashReporter.start({
        productName: "theiris",
        companyName: "themages",
        submitURL: "http://127.0.0.1:9999/crash",
    });
}

module.exports = { init };
