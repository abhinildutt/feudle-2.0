/**
 * Represents a rectangle with an origin and size.
 */
export declare class Rect {
    /**
     * The x-position of the rectangle.
     */
    x: number;
    /**
     * The y-position of the rectangle.
     */
    y: number;
    /**
     * The width of the rectangle.
     */
    width: number;
    /**
     * The height of the rectangle.
     */
    height: number;
    constructor(x: number, y: number, width?: number, height?: number);
    static readonly zero: Rect;
    /**
     * Returns a new document-space rectangle from the viewport's bounds.
     */
    static fromScreen(): Rect;
    /**
     * Returns a new document-space rectangle from the specified element.
     */
    static fromElement(element: HTMLElement): Rect;
}
