// Graph Visualizer

const speed: number = 0.2;
const PI = Math.PI;

let x: number = 0;
let y: number = 0;

function setY(x) {
    return Math.sin(2 * x * 0.04) * -1;
}

for (let i = 0; i <= 25; i++) {
    y = setY(i * PI);
    console.log(y);
}

// get element length

let elemWidth = document.querySelector(".element").getBoundingClientRect();
console.log(elemWidth.width);

console.log(elemWidth.width / (Math.PI * 25));
