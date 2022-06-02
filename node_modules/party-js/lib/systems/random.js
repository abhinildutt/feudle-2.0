"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomInsideCircle = exports.randomInsideRect = exports.randomUnitVector = exports.pick = exports.randomRange = void 0;
var components_1 = require("../components");
var math_1 = require("./math");
/**
 * Returns a random value from min to max.
 */
function randomRange(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    return math_1.lerp(min, max, Math.random());
}
exports.randomRange = randomRange;
/**
 * Picks a random element from the specified array. Returns undefined if the array is empty.
 */
function pick(arr) {
    return arr.length === 0
        ? undefined
        : arr[Math.floor(Math.random() * arr.length)];
}
exports.pick = pick;
/**
 * Returns a random unit vector.
 */
function randomUnitVector() {
    var theta = randomRange(0, 2 * Math.PI);
    var z = randomRange(-1, 1);
    return new components_1.Vector(Math.sqrt(1 - z * z) * Math.cos(theta), Math.sqrt(1 - z * z) * Math.sin(theta), z);
}
exports.randomUnitVector = randomUnitVector;
/**
 * Returns a random point inside the given rect.
 */
function randomInsideRect(rect) {
    return new components_1.Vector(rect.x + randomRange(0, rect.width), rect.y + randomRange(0, rect.height));
}
exports.randomInsideRect = randomInsideRect;
function randomInsideCircle(circle) {
    var theta = randomRange(0, 2 * Math.PI);
    var radius = randomRange(0, circle.radius);
    return new components_1.Vector(circle.x + Math.cos(theta) * radius, circle.y + Math.sin(theta) * radius);
}
exports.randomInsideCircle = randomInsideCircle;
//# sourceMappingURL=random.js.map