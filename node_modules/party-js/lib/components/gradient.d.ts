import { Color } from "./";
import { Spline } from "./spline";
/**
 * Represents a gradient that can be used to interpolate between multiple color.
 */
export declare class Gradient extends Spline<Color> {
    /**
     * Interpolates between two color on the gradient.
     */
    protected interpolate(a: Color, b: Color, t: number): Color;
    /**
     * Returns a solid gradient from the given color.
     */
    static solid(color: Color): Gradient;
    /**
     * Returns a gradient with evenly spaced keys from the given colors.
     */
    static simple(...colors: Color[]): Gradient;
}
