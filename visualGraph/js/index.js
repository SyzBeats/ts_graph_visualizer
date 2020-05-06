// User interface
const UI_container = document.querySelector(".box");
const UI_circle = document.querySelector(".circle");
// constants
const getYCoordinate = (x) => {
    return Math.sin(2 * x * 0.04) * -1;
};
class PathVisualizer {
    constructor() {
        // Class constants
        this.#BOX_WIDTH = UI_container.getBoundingClientRect().width;
        this.#PI = Math.PI;
        this.#FACTOR = this.#BOX_WIDTH / (this.#PI * 25);
        this.#Y_FACTOR = 10;
        this.#INTERVALL = 100;
    }
    // Class constants
    #BOX_WIDTH;
    #PI;
    #FACTOR;
    #Y_FACTOR;
    #INTERVALL;
    visualizePath(i) {
        setTimeout(() => {
            let yCoord = getYCoordinate(i * this.#PI);
            let xCoord = i * this.#PI * this.#FACTOR;
            UI_circle.style.bottom = `${yCoord * this.#Y_FACTOR}px`;
            UI_circle.style.left = `${xCoord}px`;
        }, this.#INTERVALL * i);
    }
}
const pathVisualizer = new PathVisualizer();
for (let i = 0; i <= 1; i++) {
    pathVisualizer.visualizePath(i);
}
