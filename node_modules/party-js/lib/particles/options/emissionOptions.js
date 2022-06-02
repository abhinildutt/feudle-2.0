"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultEmissionOptions = void 0;
var components_1 = require("../../components");
var sources_1 = require("../../systems/sources");
/**
 * Returns the default set of emission options.
 */
function getDefaultEmissionOptions() {
    return {
        rate: 10,
        angle: 0,
        bursts: [],
        sourceSampler: sources_1.rectSource(components_1.Rect.zero),
        initialLifetime: 5,
        initialSpeed: 5,
        initialSize: 1,
        initialRotation: components_1.Vector.zero,
        initialColor: components_1.Color.white,
    };
}
exports.getDefaultEmissionOptions = getDefaultEmissionOptions;
//# sourceMappingURL=emissionOptions.js.map