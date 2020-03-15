const FFI = require("ffi-napi");

const user = new FFI.Library("user32", {
    "FindWindowA": ["int32", ["string", "string"]],
    "ShowWindow": ["int32", ["int32", "int32"]]
});

function showWeChat() {
    let res = user.FindWindowA("WeChatMainWndForPC", null);
    let show = user.ShowWindow(res, 5);
}

module.exports = {showWeChat};