const { override } = require("customize-cra");

function addRenderderTarget(config) {
    config.target = "electron-renderer";
    return config
}
module.exports = override(addRenderderTarget)