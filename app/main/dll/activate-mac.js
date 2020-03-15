const applescript = require("applescript");
const script = 'tell application "WeChat" to activate end';

applescript.execString(script, (err, res) => {
    if (err) {
        return console.error("applescript", err);
    }
    console.log(res);
})