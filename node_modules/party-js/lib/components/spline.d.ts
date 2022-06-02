/**
 * Represents a key on a spline.
 */
export interface SplineKey<T> {
    /**
     * The value of the key.
     */
    value: T;
    /**
     * The position of the key.
     */
    time: number;
}
/**
 * Represents a spline that can be used to continueously evaluate a function
 * between keys. The base implementation is kept generic, so the functionality
 * can easily be implemented for similar constructs, such as gradients.
 */
export declare abstract class Spline<T> {
    /**
     * The keys in the gradient. Note that these are not sorted.
     */
    protected keys: SplineKey<T>[];
    /**
     * Creates a new spline instance, using the specified keys.
     * Note that you have to pass at least one key.
     */
    constructor(...keys: SplineKey<T>[]);
    /**
     * Evaluates the spline at the given time.
     */
    evaluate(time: number): T;
    /**
     * Interpolates using the values of two keys.
     */
    protected abstract interpolate(a: T, b: T, t: number): T;
}
