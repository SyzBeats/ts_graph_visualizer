// Graph Visualizer
var speed = 0.2;
var PI = Math.PI;
var x = 0;
var y = 0;
function setY(x) {
    return Math.sin(2 * x * 0.04) * -1;
}
for (var i = 0; i <= 25; i++) {
    y = setY(i * PI);
    console.log(y);
}
// get element length
var elemWidth = document.querySelector(".element").getBoundingClientRect();
console.log(elemWidth.width);
console.log(elemWidth.width / (Math.PI * 25));
