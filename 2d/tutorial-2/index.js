var c = document.getElementById("myCanvas");
var gl = c.getContext("2d");

function mouseMove(event) {
    gl.clearRect(0, 0, 500, 500);
    gl.beginPath();
    gl.lineWidth = 7;
    gl.strokeStyle = "blue";
    gl.arc(event.offsetX, event.offsetY, 25, 0, 2 * Math.PI);
    gl.stroke();
}

c.addEventListener("mousemove", mouseMove);

function clickCircle(event, radius) {
    radius += 0.2;
    gl.beginPath();
    gl.lineWidth = 3;
    gl.strokeStyle = "red";
    gl.arc(event.offsetX, event.offsetY, radius, 0, 2 * Math.PI);
    gl.stroke();

    if (radius < 200.0) {
        requestAnimationFrame(function () {
            clickCircle(event, radius);
        });
    }
}

function setRadius(event) {
    var radius = 0.0;
    clickCircle(event, radius);
}

c.addEventListener("click", setRadius);
