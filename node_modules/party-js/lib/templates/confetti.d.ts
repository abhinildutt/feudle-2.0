import { Color, Vector } from "../components";
import { Emitter } from "../particles/emitter";
import { ModuleFunction } from "../systems/modules";
import * as sources from "../systems/sources";
import * as variation from "../systems/variation";
/**
 * The configuration to apply to the confetti.
 */
export interface ConfettiConfiguration {
    count: variation.Variation<number>;
    spread: variation.Variation<number>;
    speed: variation.Variation<number>;
    size: variation.Variation<number>;
    rotation: variation.Variation<Vector>;
    color: variation.Variation<Color>;
    shapes: variation.Variation<string | HTMLElement>;
    modules: ModuleFunction[];
}
/**
 * The standard confetti template.
 *
 * @param source The source to emit the confetti from.
 * @param options The (optional) configuration overrides.
 */
export declare function confetti(source: sources.DynamicSourceType, options?: Partial<ConfettiConfiguration>): Emitter;
