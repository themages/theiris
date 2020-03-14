const fs = require("fs-extra");
const dist = "../../pages/main";
fs.removeSync(dist);
fs.moveSync("./build", dist);
