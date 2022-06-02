"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultRendererOptions = void 0;
/**
 * Returns the default set of renderer options.
 */
function getDefaultRendererOptions() {
    return {
        shapeFactory: "square",
        applyColor: defaultApplyColor,
        applyOpacity: defaultApplyOpacity,
        applyLighting: defaultApplyLighting,
        applyTransform: defaultApplyTransform,
    };
}
exports.getDefaultRendererOptions = getDefaultRendererOptions;
/**
 * Applies the specified color to the element.
 *
 * @remarks
 * This function is aware of the element's node type:
 * - `div` elements have their `background` set.
 * - `svg` elements have their `fill` and `color` set.
 * - Other elements have their `color` set.
 */
function defaultApplyColor(color, element) {
    var hex = color.toHex();
    // Note that by default, HTML node names are uppercase.
    switch (element.nodeName.toLowerCase()) {
        case "div":
            element.style.background = hex;
            break;
        case "svg":
            element.style.fill = element.style.color = hex;
            break;
        default:
            element.style.color = hex;
            break;
    }
}
/**
 * Applies the specified opacity to the element.
 */
function defaultApplyOpacity(opacity, element) {
    element.style.opacity = opacity.toString();
}
/**
 * Applies the specified lighting to the element as a brightness filter.
 *
 * @remarks
 * This function assumes an ambient light with intensity 0.5, and that the
 * particle should be lit from both sides. The brightness filter can exceed 1,
 * to give the particles a "glossy" feel.
 */
function defaultApplyLighting(lighting, element) {
    element.style.filter = "brightness(" + (0.5 + Math.abs(lighting)) + ")";
}
/**
 * Applies the specified transform to the element as a 3D CSS transform.
 * Also takes into account the current window scroll, to make sure that particles are
 * rendered inside of the fixed container.
 */
function defaultApplyTransform(particle, element) {
    element.style.transform =
        // Make sure to take window scrolling into account.
        "translateX(" + (particle.location.x - window.scrollX).toFixed(3) + "px) " +
            ("translateY(" + (particle.location.y - window.scrollY).toFixed(3) + "px) ") +
            ("translateZ(" + particle.location.z.toFixed(3) + "px) ") +
            ("rotateX(" + particle.rotation.x.toFixed(3) + "deg) ") +
            ("rotateY(" + particle.rotation.y.toFixed(3) + "deg) ") +
            ("rotateZ(" + particle.rotation.z.toFixed(3) + "deg) ") +
            ("scale(" + particle.size.toFixed(3) + ")");
}
//# sourceMappingURL=renderOptions.js.map