var c = document.getElementById("myCanvas");

var gl = c.getContext("2d");

gl.beginPath();
gl.lineWidth = 2;
gl.strokeStyle = "black";
gl.moveTo(0, 0);
gl.lineTo(500, 500);
gl.stroke();

gl.beginPath();
gl.lineWidth = 1;
gl.strokeStyle = "grey";
for (let i = 0; i < 10; i++) {
    gl.moveTo(i * 50, 0);
    gl.lineTo(i * 50, 500);
}
for (let i = 0; i < 10; i++) {
    gl.moveTo(0, i * 50);
    gl.lineTo(500, i * 50);
}
gl.stroke();

gl.beginPath();
gl.lineWidth = 3;
gl.strokeStyle = "red";
gl.arc(250, 250, 100, 0, 2 * Math.PI);
gl.stroke();
gl.beginPath();
gl.arc(250, 250, 150, 0, 2 * Math.PI);
gl.stroke();
gl.beginPath();
gl.arc(250, 250, 200, 0, 2 * Math.PI);
gl.stroke();

gl.beginPath();
gl.lineWidth = 5;
gl.strokeStyle = "green";
gl.moveTo(500, 0);
gl.lineTo(0, 500);
gl.stroke();
