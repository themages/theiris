const fs = require("fs-extra");
const dist = "../../pages/main";
const myDir = "./build";
fs.removeSync(dist);
fs.access(myDir, function(err) {
    if (err && err.code === 'ENOENT') {
        fs.mkdir(myDir);
    }
});
fs.moveSync(myDir, dist);
