import { Circle, Rect, Vector } from "../components";
/**
 * Represents a method used for sampling points to emit particles from.
 */
export declare type SourceSampler = () => Vector;
/**
 * Represents all types where a source type can be dynamically inferred.
 */
export declare type DynamicSourceType = Circle | Rect | HTMLElement | MouseEvent;
/**
 * Dynamically infers a source sampler for the specified source type.
 */
export declare function dynamicSource(source: unknown): SourceSampler;
/**
 * Creates a sampler to retrieve random points inside a specified HTMLElement.
 */
export declare function elementSource(source: HTMLElement): SourceSampler;
/**
 * Creates a sampler to retrieve the position of a mouse event.
 */
export declare function mouseSource(source: MouseEvent): SourceSampler;
/**
 * Creates a sampler to retrieve random points inside a specified rectangle.
 */
export declare function rectSource(source: Rect): SourceSampler;
/**
 * Creates a sampler to retrieve random points inside a specified circle.
 */
export declare function circleSource(source: Circle): SourceSampler;
