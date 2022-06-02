"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.particleContainer = exports.debugContainer = exports.rootContainer = void 0;
var settings_1 = require("./settings");
var util_1 = require("./util");
/**
 * The prefix to apply to the containers.
 */
var containerPrefix = "party-js-";
/**
 * Checks if the specified container is 'active', meaning not undefined and attached to the DOM.
 */
function isContainerActive(container) {
    return container && container.isConnected;
}
/**
 * A generic factory method for creating a DOM container. Prefixes the specified name with the
 * container prefix, applies the styles and adds it under the parent.
 */
function makeContainer(name, styles, parent) {
    var container = document.createElement("div");
    container.id = containerPrefix + name;
    Object.assign(container.style, styles);
    return parent.appendChild(container);
}
/**
 * Represents the root container for DOM elements of the library.
 */
exports.rootContainer = new util_1.Lazy(function () {
    return makeContainer("container", {
        position: "fixed",
        left: "0",
        top: "0",
        height: "100vh",
        width: "100vw",
        pointerEvents: "none",
        userSelect: "none",
        zIndex: settings_1.settings.zIndex.toString(),
    }, document.body);
}, isContainerActive);
/**
 * Represents the debugging container of the library, only active if debugging is enabled.
 */
exports.debugContainer = new util_1.Lazy(function () {
    return makeContainer("debug", {
        position: "absolute",
        top: "0",
        left: "0",
        margin: "0.5em",
        padding: "0.5em 1em",
        border: "2px solid rgb(0, 0, 0, 0.2)",
        background: "rgb(0, 0, 0, 0.1)",
        color: "#555",
        fontFamily: "monospace",
    }, exports.rootContainer.current);
}, isContainerActive);
/**
 * Represents the particle container of the library.
 * This is where the particle DOM elements get rendered into.
 */
exports.particleContainer = new util_1.Lazy(function () {
    return makeContainer("particles", {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        perspective: "1200px",
    }, exports.rootContainer.current);
}, isContainerActive);
//# sourceMappingURL=containers.js.map