"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
/**
 * Represents a circle.
 */
var Circle = /** @class */ (function () {
    /**
     * Creates a new circle at the specified coordinates, with a default radius of 0.
     */
    function Circle(x, y, radius) {
        if (radius === void 0) { radius = 0; }
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    Circle.zero = new Circle(0, 0);
    return Circle;
}());
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map