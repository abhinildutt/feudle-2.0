"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleSource = exports.rectSource = exports.mouseSource = exports.elementSource = exports.dynamicSource = void 0;
var components_1 = require("../components");
var random_1 = require("./random");
/**
 * Dynamically infers a source sampler for the specified source type.
 */
function dynamicSource(source) {
    if (source instanceof HTMLElement) {
        return elementSource(source);
    }
    if (source instanceof components_1.Circle) {
        return circleSource(source);
    }
    if (source instanceof components_1.Rect) {
        return rectSource(source);
    }
    if (source instanceof MouseEvent) {
        return mouseSource(source);
    }
    throw new Error("Cannot infer the source type of '" + source + "'.");
}
exports.dynamicSource = dynamicSource;
/**
 * Creates a sampler to retrieve random points inside a specified HTMLElement.
 */
function elementSource(source) {
    return function () { return random_1.randomInsideRect(components_1.Rect.fromElement(source)); };
}
exports.elementSource = elementSource;
/**
 * Creates a sampler to retrieve the position of a mouse event.
 */
function mouseSource(source) {
    return function () {
        return new components_1.Vector(window.scrollX + source.clientX, window.scrollY + source.clientY);
    };
}
exports.mouseSource = mouseSource;
/**
 * Creates a sampler to retrieve random points inside a specified rectangle.
 */
function rectSource(source) {
    return function () { return random_1.randomInsideRect(source); };
}
exports.rectSource = rectSource;
/**
 * Creates a sampler to retrieve random points inside a specified circle.
 */
function circleSource(source) {
    return function () { return random_1.randomInsideCircle(source); };
}
exports.circleSource = circleSource;
//# sourceMappingURL=sources.js.map