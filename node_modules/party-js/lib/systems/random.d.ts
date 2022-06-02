import { Circle, Rect, Vector } from "../components";
/**
 * Returns a random value from min to max.
 */
export declare function randomRange(min?: number, max?: number): number;
/**
 * Picks a random element from the specified array. Returns undefined if the array is empty.
 */
export declare function pick<T>(arr: T[]): T;
/**
 * Returns a random unit vector.
 */
export declare function randomUnitVector(): Vector;
/**
 * Returns a random point inside the given rect.
 */
export declare function randomInsideRect(rect: Rect): Vector;
export declare function randomInsideCircle(circle: Circle): Vector;
