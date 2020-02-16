const peer = require("./peer-control");
peer.on("add-stream", stream => {
    play(stream);
});
let video = document.getElementById("remote");
function play(stream) {
    video.srcObject = stream;
    video.onloadedmetadata = function () {
        video.play();
    };
}

window.onkeydown = function (e) {
    let data = {
        keyCode: e.keyCode,
        shift: e.shiftKey,
        meta: e.metaKey,
        control: e.ctrlKey,
        alt: e.altKey
    };
    peer.emit("robot", "key", data);
};
window.onmouseup = function (e) {
    let data = {
        clientX: e.clientX,
        clientY: e.clientY,
        screen: {
            width: window.screen.width,
            height: window.screen.height
        },
        video: {
            width: video.getBoundingClientRect().width,
            height: video.getBoundingClientRect().height
        }
    };
    peer.emit("robot", "mouse", data);
};
