// User interface

const UI_container = document.querySelector<HTMLDivElement>(".box");
const UI_circle = document.querySelector<HTMLDivElement>(".circle");

// constants

const getYCoordinate = (x: number) => {
  return Math.sin(2 * x * 0.04) * -1;
};

class PathVisualizer {
  // Class constants
  #BOX_WIDTH: number = UI_container.getBoundingClientRect().width;
  #PI: number = Math.PI;
  #FACTOR: number = this.#BOX_WIDTH / (this.#PI * 25);
  #Y_FACTOR: number = 10;
  #INTERVALL: number = 100;

  constructor() {}

  public visualizePath(i: number) {
    setTimeout(() => {
      let yCoord: number = getYCoordinate(i * this.#PI);
      let xCoord: number = i * this.#PI * this.#FACTOR;

      UI_circle.style.bottom = `${yCoord * this.#Y_FACTOR}px`;
      UI_circle.style.left = `${xCoord}px`;
    }, this.#INTERVALL * i);
  }
}

const pathVisualizer = new PathVisualizer();

for (let i = 0; i <= 1; i++) {
  pathVisualizer.visualizePath(i);
}
