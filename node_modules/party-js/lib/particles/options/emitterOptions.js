"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultEmitterOptions = void 0;
var rules_1 = require("../../util/rules");
/**
 * Returns the default set of emitter options.
 */
function getDefaultEmitterOptions() {
    return {
        duration: 5,
        loops: 1,
        useGravity: true,
        maxParticles: 300,
        despawningRules: [rules_1.despawningRules.lifetime, rules_1.despawningRules.bounds],
        modules: [],
    };
}
exports.getDefaultEmitterOptions = getDefaultEmitterOptions;
//# sourceMappingURL=emitterOptions.js.map