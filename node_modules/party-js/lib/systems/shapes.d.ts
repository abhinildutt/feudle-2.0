import { Variation } from "./variation";
/**
 * Represents the lookup that maps resolveable element keys to their HTML strings.
 *
 * @remarks
 * The default shapes are made to fit inside a dimension of 10x10 pixels, except
 * the 'star' shape, which exceeds it slightly.
 */
export declare const resolvableShapes: Record<string, string>;
/**
 * Resolves the specified element factory using the resolvable elements, if needed.
 */
export declare function resolveShapeFactory(factory: Variation<string | HTMLElement>): HTMLElement;
