import { Color } from "../../components";
import { Variation } from "../../systems/variation";
import { Particle } from "../particle";
/**
 * Represents a delegate used by the renderer to apply a certain property to the
 * particle's HTMLElement. Note that this property is generic and does not
 * have to contain the particle itself.
 */
export declare type ApplyFunction<T> = (property: T, element: HTMLElement) => void;
/**
 * Holds the options used to configure the renderer for a particle system.
 */
export interface RenderOptions {
    /**
     * The factory used to determine the element (or "shape") that a particle will be rendered as.
     * This variation can also return a resolve-able string.
     *
     * @remarks
     * Depending on the type of value that is returned from the factory, additional
     * processing has to be done.
     *
     * - strings: The `party.resolvableShapes` lookup is used to resolve the string to an actual
     * HTMLElement, before following the same procedure as if an HTMLElement would have been passed.
     * - HTMLElements: The returned element is deep cloned and used to represent the particle in the document.
     *
     * @defaultValue Creates a square-shaped `<div>` element with a size of 10px.
     */
    shapeFactory: Variation<HTMLElement | string>;
    /**
     * The delegate used to apply a certain color to the particle's HTMLElement.
     * @defaultValue Applies the specified color to the element's "background" property.
     */
    applyColor?: ApplyFunction<Color>;
    /**
     * The delegate used to apply a certain degree of opacity to the particle's HTMLElement.
     * @defaultValue Applies the specified opacity to the element's "opacity" property.
     */
    applyOpacity?: ApplyFunction<number>;
    /**
     * The delegate used to apply a certain degree of lighting to the particle's HTMLElement.
     * @defaultValue Applies the specified lighting to the element as a brightness filter.
     */
    applyLighting?: ApplyFunction<number>;
    /**
     * The delegate used to apply a certain transform to the particle's HTMLElement.
     * @defaultValue Applies the specified transform to the element as a 3D CSS transform.
     */
    applyTransform?: ApplyFunction<Particle>;
}
/**
 * Returns the default set of renderer options.
 */
export declare function getDefaultRendererOptions(): RenderOptions;
