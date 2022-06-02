"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.forceInit = exports.util = exports.math = exports.random = exports.sources = exports.variation = exports.Emitter = exports.Particle = exports.settings = exports.scene = void 0;
var scene_1 = require("./scene");
var util_1 = require("./util");
__exportStar(require("./components"), exports);
__exportStar(require("./templates"), exports);
__exportStar(require("./systems/shapes"), exports);
__exportStar(require("./systems/modules"), exports);
// Create the lazy-initializing scene.
exports.scene = new util_1.Lazy(function () {
    // The library requires the use of the DOM, hence it cannot run in non-browser environments.
    if (typeof document === "undefined" || typeof window === "undefined") {
        throw new Error("It seems like you are trying to run party.js in a non-browser-like environment, which is not supported.");
    }
    return new scene_1.Scene();
});
var settings_1 = require("./settings");
Object.defineProperty(exports, "settings", { enumerable: true, get: function () { return settings_1.settings; } });
var particle_1 = require("./particles/particle");
Object.defineProperty(exports, "Particle", { enumerable: true, get: function () { return particle_1.Particle; } });
var emitter_1 = require("./particles/emitter");
Object.defineProperty(exports, "Emitter", { enumerable: true, get: function () { return emitter_1.Emitter; } });
exports.variation = require("./systems/variation");
exports.sources = require("./systems/sources");
exports.random = require("./systems/random");
exports.math = require("./systems/math");
exports.util = require("./util");
/**
 * Forces the initialization of the otherwise lazy scene.
 */
function forceInit() {
    exports.scene.current;
}
exports.forceInit = forceInit;
exports.default = require("./");
//# sourceMappingURL=index.js.map