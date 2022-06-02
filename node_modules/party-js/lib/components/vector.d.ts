/**
 * Represents a structure used to process vectors.
 *
 * @remarks
 * Note that the operations in this class will **not** modify the original vector,
 * except for the property assignments. This is to ensure that vectors are not
 * unintentionally modified.
 *
 * @example
 * ```ts
 * const vectorA = new Vector(1, 3, 5);
 * const vectorB = new Vector(2, 3, 1);
 * const vectorC = vectorA.add(vectorB); // (3, 6, 6)
 * ```
 */
export declare class Vector {
    /**
     * Returns the x-component of the vector.
     */
    get x(): number;
    /**
     * Modifies the x-component of the vector.
     */
    set x(value: number);
    /**
     * Returns the y-component of the vector.
     */
    get y(): number;
    /**
     * Modifies the y-component of the vector.
     */
    set y(value: number);
    /**
     * Returns the z-component of the vector.
     */
    get z(): number;
    /**
     * Modifies the z-component of the vector.
     */
    set z(value: number);
    /**
     * Returns the xyz-components of the vector, bundled as a copied array.
     */
    get xyz(): [number, number, number];
    /**
     * Simultaneously updates the xyz-components of the vector, by passing an array.
     */
    set xyz(values: [number, number, number]);
    private values;
    /**
     * Creates a new vector with optional x-, y-, and z-components.
     * Omitted components are defaulted to 0.
     */
    constructor(x?: number, y?: number, z?: number);
    /**
     * Returns (0, 0, 0).
     */
    static readonly zero: Vector;
    /**
     * Returns (1, 1, 1).
     */
    static readonly one: Vector;
    /**
     * Returns (1, 0, 0).
     */
    static readonly right: Vector;
    /**
     * Returns (0, 1, 0).
     */
    static readonly up: Vector;
    /**
     * Returns (0, 0, 1).
     */
    static readonly forward: Vector;
    /**
     * Returns the length of the vector.
     */
    magnitude(): number;
    /**
     * Returns the squared length of the vector.
     */
    sqrMagnitude(): number;
    /**
     * Adds the two vectors together, component-wise.
     */
    add(vector: Vector): Vector;
    /**
     * Subtracts the right vector from the left one, component-wise.
     */
    subtract(vector: Vector): Vector;
    /**
     * Scales the lefthand vector by another vector or by a number.
     */
    scale(scalar: number | Vector): Vector;
    /**
     * Normalizes the vector to a length of 1. If the length was previously zero,
     * then a zero-length vector will be returned.
     */
    normalized(): Vector;
    /**
     * Returns the angle between two vectors, in degrees.
     */
    angle(vector: Vector): number;
    /**
     * Returns the cross-product of two vectors.
     */
    cross(vector: Vector): Vector;
    /**
     * returns the dot-product of two vectors.
     */
    dot(vector: Vector): number;
    /**
     * Returns a formatted representation of the vector.
     */
    toString(): string;
    /**
     * Creates a new vector from an angle, in degrees. Note that the z-component will be zero.
     */
    static from2dAngle(angle: number): Vector;
}
