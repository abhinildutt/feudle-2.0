"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sparkles = void 0;
var __1 = require("..");
var components_1 = require("../components");
var modules_1 = require("../systems/modules");
var random = require("../systems/random");
var sources = require("../systems/sources");
var variation = require("../systems/variation");
var util = require("../util");
/**
 * The standard sparkles template.
 *
 * @param source The source to emit the sparkles from.
 * @param options The (optional) configuration overrides.
 */
function sparkles(source, options) {
    var populated = util.overrideDefaults({
        lifetime: variation.range(1, 2),
        count: variation.range(10, 20),
        speed: variation.range(100, 200),
        size: variation.range(0.8, 1.8),
        rotation: function () { return new components_1.Vector(0, 0, random.randomRange(0, 360)); },
        color: function () { return components_1.Color.fromHsl(50, 100, random.randomRange(55, 85)); },
        modules: [
            new modules_1.ModuleBuilder()
                .drive("rotation")
                .by(function (t) { return new components_1.Vector(0, 0, 200).scale(t); })
                .relative()
                .build(),
            new modules_1.ModuleBuilder()
                .drive("size")
                .by(new components_1.NumericSpline({ time: 0, value: 0 }, { time: 0.3, value: 1 }, { time: 0.7, value: 1 }, { time: 1, value: 0 }))
                .through("relativeLifetime")
                .relative()
                .build(),
            new modules_1.ModuleBuilder()
                .drive("opacity")
                .by(new components_1.NumericSpline({ time: 0, value: 1 }, { time: 0.5, value: 1 }, { time: 1, value: 0 }))
                .through("relativeLifetime")
                .build(),
        ],
    }, options);
    var emitter = __1.scene.current.createEmitter({
        emitterOptions: {
            loops: 1,
            duration: 3,
            useGravity: false,
            modules: populated.modules,
        },
        emissionOptions: {
            rate: 0,
            bursts: [{ time: 0, count: populated.count }],
            sourceSampler: sources.dynamicSource(source),
            angle: variation.range(0, 360),
            initialLifetime: populated.lifetime,
            initialSpeed: populated.speed,
            initialSize: populated.size,
            initialRotation: populated.rotation,
            initialColor: populated.color,
        },
        rendererOptions: {
            applyLighting: undefined,
            shapeFactory: "star",
        },
    });
    return emitter;
}
exports.sparkles = sparkles;
//# sourceMappingURL=sparkles.js.map