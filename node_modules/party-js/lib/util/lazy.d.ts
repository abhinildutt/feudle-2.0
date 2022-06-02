/**
 * A factory method used to initialize a lazy value.
 */
declare type LazyFactory<T> = () => T;
/**
 * A predicate method used to check if a lazy value was already initialized.
 */
declare type ExistsPredicate<T> = (value: T) => boolean;
/**
 * A wrapper class to lazily initialize a value.
 * Supports custom factory and predicate methods.
 */
export declare class Lazy<T> {
    private factory;
    private exists;
    /**
     * The current value of the lazy object. Will be initialized, if the 'exists'
     * predicate doesn't match.
     */
    get current(): T;
    private value?;
    constructor(factory: LazyFactory<T>, exists?: ExistsPredicate<T>);
    private static defaultExists;
}
export {};
