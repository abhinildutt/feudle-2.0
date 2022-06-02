"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
var __1 = require("..");
var vector_1 = require("../components/vector");
var containers_1 = require("../containers");
var shapes_1 = require("../systems/shapes");
var util_1 = require("../util");
/**
 * Represents a renderer used to draw particles to the DOM via HTML
 * elements. Additionally, it is responsible for purging the elements
 * of destroyed particles from the DOM.
 */
var Renderer = /** @class */ (function () {
    function Renderer() {
        /**
         * The lookup of elements currently handled by the renderer, with the
         * particle ID as key and a HTMLElement as the value.
         */
        this.elements = new Map();
        /**
         * The normalized direction the light comes from.
         */
        this.light = new vector_1.Vector(0, 0, 1);
        /**
         * Whether or not the renderer should actually draw particles.
         */
        this.enabled = true;
        // Respect that users might prefer reduced motion.
        // See: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
        this.enabled =
            !__1.settings.respectReducedMotion ||
                !window.matchMedia("(prefers-reduced-motion)").matches;
    }
    /**
     * Begins a new render block. During the rendering phase, a list of rendered particles
     * is tracked, so that stale particles can be removed later.
     */
    Renderer.prototype.begin = function () {
        this.renderedParticles = [];
    };
    /**
     * Terminates an existing render block. This checks which particles were rendered
     * during the block and purges all unused HTMLElements from the DOM.
     *
     * @returns The amount of particles that were rendered.
     */
    Renderer.prototype.end = function () {
        var it = this.elements.keys();
        var result = it.next();
        while (!result.done) {
            var id = result.value;
            if (!this.renderedParticles.includes(id)) {
                this.elements.get(id).remove();
                this.elements.delete(id);
            }
            result = it.next();
        }
        return this.renderedParticles.length;
    };
    /**
     * Renders an individual particle to the DOM. If the particle is rendered for the first
     * time, a HTMLElement will be created using the emitter's render settings.
     *
     * @param particle The particle to be rendered.
     * @param emitter The system containing the particle.
     */
    Renderer.prototype.renderParticle = function (particle, emitter) {
        if (!this.enabled)
            return;
        var options = emitter.renderer;
        // Ensure that an element for the particle exists.
        var element = this.elements.has(particle.id)
            ? this.elements.get(particle.id)
            : this.createParticleElement(particle, options);
        if (options.applyColor) {
            // If the options offer a coloring method, apply it.
            options.applyColor(particle.color, element);
        }
        if (options.applyOpacity) {
            // If the options offer an opacity modifying method, apply it.
            options.applyOpacity(particle.opacity, element);
        }
        if (options.applyLighting) {
            // If the options offer a lighting method, apply it.
            // Lighting is calculated as a combination of the particle's normal
            // direction and the lighting direction.
            var normal = util_1.rotationToNormal(particle.rotation);
            var lightingCoefficient = normal.dot(this.light);
            options.applyLighting(lightingCoefficient, element);
        }
        if (options.applyTransform) {
            // If the options offer a transformation method, apply it.
            // This ensures the particle is rendered at the correct position with the correct rotation.
            options.applyTransform(particle, element);
        }
        // Mark the particle as rendered.
        this.renderedParticles.push(particle.id);
    };
    /**
     * Creates the HTMLElement for a particle that does not have one already.
     */
    Renderer.prototype.createParticleElement = function (particle, options) {
        // Resolve the element returned from the factory.
        var resolved = shapes_1.resolveShapeFactory(options.shapeFactory);
        // Clone the node to ensure we do not break existing elements.
        var element = resolved.cloneNode(true);
        // Ensure that the elements can be "stacked" ontop of eachother.
        element.style.position = "absolute";
        // Register the new element in the map, while appending the new element to the DOM.
        this.elements.set(particle.id, containers_1.particleContainer.current.appendChild(element));
        return element;
    };
    return Renderer;
}());
exports.Renderer = Renderer;
//# sourceMappingURL=renderer.js.map