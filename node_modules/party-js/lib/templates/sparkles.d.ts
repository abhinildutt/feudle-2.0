import { Color, Vector } from "../components";
import { Emitter } from "../particles/emitter";
import { ModuleFunction } from "../systems/modules";
import * as sources from "../systems/sources";
import * as variation from "../systems/variation";
/**
 * The configuration to apply to the sparkles.
 */
export interface SparkleConfiguration {
    lifetime: variation.Variation<number>;
    count: variation.Variation<number>;
    speed: variation.Variation<number>;
    size: variation.Variation<number>;
    rotation: variation.Variation<Vector>;
    color: variation.Variation<Color>;
    modules: ModuleFunction[];
}
/**
 * The standard sparkles template.
 *
 * @param source The source to emit the sparkles from.
 * @param options The (optional) configuration overrides.
 */
export declare function sparkles(source: sources.DynamicSourceType, options?: Partial<SparkleConfiguration>): Emitter;
