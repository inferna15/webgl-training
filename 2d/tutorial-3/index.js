var c = document.getElementById("myCanvas");
var gl = c.getContext("2d");

var timer = 0.0;
var lastKey;
var lastCode;

function myAnimation() {
    timer += 1.0;

    gl.rect(0, 0, 500, 100);
    gl.fillStyle = "tomato";
    gl.fill();

    gl.font = "18px Arial";
    gl.fillStyle = "white";
    gl.fillText(timer, 25, 50);
    gl.fillText("Last Key: " + lastKey, 100, 50);
    gl.fillText("Code: " + lastCode, 300, 50);
    requestAnimationFrame(myAnimation);
}

myAnimation();

function keyFunction(event) {
    lastKey = event.key;
    lastCode = event.code;

    if (lastCode == "KeyR") {
        timer = 0.0;
    }
}

addEventListener("keypress", keyFunction);
