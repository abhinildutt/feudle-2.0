"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overrideDefaults = void 0;
/**
 * Replaces the supplied defaults with the properties specified in the overrides.
 * This returns a new object.
 */
function overrideDefaults(defaults, overrides) {
    return Object.assign({}, defaults, overrides);
}
exports.overrideDefaults = overrideDefaults;
//# sourceMappingURL=config.js.map