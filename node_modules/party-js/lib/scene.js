"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
var debug_1 = require("./debug");
var emitter_1 = require("./particles/emitter");
var renderer_1 = require("./particles/renderer");
/**
 * Represents a scene that contains emitters and their particles.
 *
 * Scenes are responsible for spawning and updating emitters, and
 * removing them once they are done.
 *
 * Scenes are not explicitely present in the DOM as an element, only
 * the contained particles are.
 */
var Scene = /** @class */ (function () {
    /**
     * Initializes a new scene and starts the ticking job.
     */
    function Scene() {
        /**
         * The emitters currently present in the scene.
         */
        this.emitters = [];
        /**
         * The debug instance associated with the scene.
         */
        this.debug = new debug_1.Debug(this);
        /**
         * The renderer associated with the scene.
         */
        this.renderer = new renderer_1.Renderer();
        /**
         * The ID of the currently scheduled tick.
         */
        this.scheduledTickId = undefined;
        /**
         * The timestamp of the last tick, used to calculate deltas.
         *
         * @initialValue `performance.now()` (time origin)
         * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp
         */
        this.lastTickTimestamp = performance.now();
        // Ensure the scene context is preserved on the tick.
        this.tick = this.tick.bind(this);
        this.scheduleTick();
    }
    /**
     * Creates and returns a new, default emitter object.
     */
    Scene.prototype.createEmitter = function (options) {
        var emitter = new emitter_1.Emitter(options);
        this.emitters.push(emitter);
        return emitter;
    };
    /**
     * Clears all emitters from the scene.
     *
     * @returns The number of cleared emitters.
     */
    Scene.prototype.clearEmitters = function () {
        return this.emitters.splice(0).length;
    };
    /**
     * Clears the particles from all emitters in the scene.
     * Note that this does not remove the actual emitter objects though.
     *
     * @returns The number of cleared particles.
     */
    Scene.prototype.clearParticles = function () {
        return this.emitters.reduce(function (sum, emitter) { return sum + emitter.clearParticles(); }, 0);
    };
    /**
     * Schedules a tick in the scene.
     */
    Scene.prototype.scheduleTick = function () {
        this.scheduledTickId = window.requestAnimationFrame(this.tick);
    };
    /**
     * Cancels a pending tick operation.
     */
    Scene.prototype.cancelTick = function () {
        window.cancelAnimationFrame(this.scheduledTickId);
    };
    /**
     * Processes a tick cycle, updating all emitters contained in the scene.
     * This is handled as a JS animation frame event, hence the passed timestamp.
     *
     * @remarks
     * The emitter ticking and particle rendering is run using try-catch blocks,
     * to ensure that we can recover from potential errors.
     *
     * @param timestamp The current timestamp of the animation frame.
     */
    Scene.prototype.tick = function (timestamp) {
        // Calculate the elapsed delta and convert it to seconds.
        var delta = (timestamp - this.lastTickTimestamp) / 1000;
        try {
            // Perform ticks for all the emitters in the scene.
            for (var i = 0; i < this.emitters.length; i++) {
                var emitter = this.emitters[i];
                emitter.tick(delta);
                if (emitter.isExpired && emitter.canRemove) {
                    this.emitters.splice(i--, 1);
                }
            }
        }
        catch (error) {
            console.error("An error occurred while updating the scene's emitters:\n\"" + error + "\"");
        }
        try {
            // Instruct the renderer to draw the particles of all systems.
            this.renderer.begin();
            for (var _i = 0, _a = this.emitters; _i < _a.length; _i++) {
                var emitter = _a[_i];
                for (var _b = 0, _c = emitter.particles; _b < _c.length; _b++) {
                    var particle = _c[_b];
                    this.renderer.renderParticle(particle, emitter);
                }
            }
            this.renderer.end();
        }
        catch (error) {
            console.error("An error occurred while rendering the scene's particles:\n\"" + error + "\"");
        }
        // Perform a tick on the debug interface
        this.debug.tick(delta);
        // Save the timestamp as the last tick timestamp and schedule a new tick.
        this.lastTickTimestamp = timestamp;
        this.scheduleTick();
    };
    return Scene;
}());
exports.Scene = Scene;
//# sourceMappingURL=scene.js.map