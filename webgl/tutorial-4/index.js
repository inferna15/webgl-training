var c = document.getElementById("myCanvas");
var gl = c.getContext("webgl");

var vertex_shader = `
    attribute vec2 position
    void main(void) {
        gl_Position = vec4(position, 0.0, 1.0);
    }
`;
var fragment_shader = `
    void main(void) {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    }
`;
