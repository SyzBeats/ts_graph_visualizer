// User interface
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _BOX_WIDTH, _PI, _FACTOR, _Y_FACTOR, _INTERVALL;
const UI_container = document.querySelector(".box");
const UI_circle = document.querySelector(".circle");
// constants
const getYCoordinate = (x) => {
    return Math.sin(2 * x * 0.04) * -1;
};
class PathVisualizer {
    constructor() {
        // Class constants
        _BOX_WIDTH.set(this, UI_container.getBoundingClientRect().width);
        _PI.set(this, Math.PI);
        _FACTOR.set(this, __classPrivateFieldGet(this, _BOX_WIDTH) / (__classPrivateFieldGet(this, _PI) * 25));
        _Y_FACTOR.set(this, 10);
        _INTERVALL.set(this, 100);
    }
    visualizePath(i) {
        setTimeout(() => {
            let yCoord = getYCoordinate(i * __classPrivateFieldGet(this, _PI));
            let xCoord = i * __classPrivateFieldGet(this, _PI) * __classPrivateFieldGet(this, _FACTOR);
            UI_circle.style.bottom = `${yCoord * __classPrivateFieldGet(this, _Y_FACTOR)}px`;
            UI_circle.style.left = `${xCoord}px`;
        }, __classPrivateFieldGet(this, _INTERVALL) * i);
    }
}
_BOX_WIDTH = new WeakMap(), _PI = new WeakMap(), _FACTOR = new WeakMap(), _Y_FACTOR = new WeakMap(), _INTERVALL = new WeakMap();
const pathVisualizer = new PathVisualizer();
for (let i = 0; i <= 25; i++) {
    pathVisualizer.visualizePath(i);
}
