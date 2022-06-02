/**
 * Represents a circle.
 */
export declare class Circle {
    /**
     * The x-coordinate of the circle.
     */
    x: number;
    /**
     * The y-coordinate of the circle.
     */
    y: number;
    /**
     * The radius of the circle.
     *
     * @defaultValue 0
     */
    radius: number;
    /**
     * Creates a new circle at the specified coordinates, with a default radius of 0.
     */
    constructor(x: number, y: number, radius?: number);
    static readonly zero: Circle;
}
