/**
 * Constant coefficient to convert degrees to radians.
 */
export declare const deg2rad: number;
/**
 * Constant coefficient to convert radians to degrees.
 */
export declare const rad2deg: number;
/**
 * A small value to approximately compare values.
 */
export declare const epsilon = 0.000001;
/**
 * Linearly interpolates between a and b by t.
 */
export declare function lerp(a: number, b: number, t: number): number;
/**
 * Smoothly interpolates between a and b by t (using cosine interpolation).
 */
export declare function slerp(a: number, b: number, t: number): number;
/**
 * Inversely lerps v between a and b to find t.
 */
export declare function invlerp(a: number, b: number, v: number): number;
/**
 * Clamps the specified value between a minimum and a maximum.
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Checks if a is approximately equal to b.
 */
export declare function approximately(a: number, b: number): boolean;
