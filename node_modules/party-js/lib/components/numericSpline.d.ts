import { Spline } from "./spline";
/**
 * Represents a spline that can take numeric values.
 */
export declare class NumericSpline extends Spline<number> {
    /**
     * Smoothly interpolates between two keys on the spline.
     */
    protected interpolate(a: number, b: number, t: number): number;
}
