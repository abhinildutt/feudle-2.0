/**
 * Represents a color consisting of RGB values. The components of it are
 * represented as integers in the range 0 to 255.
 *
 * @example
 * ```ts
 * const a = new Color(12, 59, 219);
 * const b = Color.fromHex("#ffa68d");
 * const result = a.mix(b);
 * ```
 */
export declare class Color {
    /**
     * Returns the r-component of the color.
     */
    get r(): number;
    /**
     * Modifies the r-component of the color.
     * Note that this also floors the value.
     */
    set r(value: number);
    /**
     * Returns the g-component of the color.
     */
    get g(): number;
    /**
     * Modifies the g-component of the color.
     * Note that this also floors the value.
     */
    set g(value: number);
    /**
     * Returns the b-component of the color.
     * Note that this also floors the value.
     */
    get b(): number;
    /**
     * Modifies the b-component of the color.
     */
    set b(value: number);
    /**
     * Returns the rgb-components of the color, bundled as a copied array.
     */
    get rgb(): [number, number, number];
    /**
     * Simultaneously updates the rgb-components of the color, by passing an array.
     */
    set rgb(values: [number, number, number]);
    private values;
    /**
     * Creates a new color instance from the specified RGB components.
     */
    constructor(r: number, g: number, b: number);
    /**
     * Returns (1, 1, 1).
     */
    static readonly white: Color;
    /**
     * Returns (0, 0, 0).
     */
    static readonly black: Color;
    /**
     * Mixes the two color together with an optional mixing weight.
     * This weight is 0.5 by default, perfectly averaging the color.
     */
    mix(color: Color, weight?: number): Color;
    /**
     * Returns the hexadecimal representation of the color, prefixed by '#'.
     */
    toHex(): string;
    /**
     * Returns a formatted representation of the color.
     */
    toString(): string;
    /**
     * Creates a color from the specified hexadecimal string.
     * This string can optionally be prefixed by '#'.
     */
    static fromHex(hex: string): Color;
    /**
     * Creates a color from the specified HSL components.
     *
     * @see https://stackoverflow.com/a/9493060/5507624
     */
    static fromHsl(h: number, s: number, l: number): Color;
}
