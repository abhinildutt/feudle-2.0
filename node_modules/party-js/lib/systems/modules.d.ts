import { Spline } from "../components/spline";
import { Particle } from "../particles/particle";
declare type ValueOf<T> = T[keyof T];
/**
 * Represents a value that can be used to drive a particle module.
 */
export declare type ModuleDriverValue<T> = T | Spline<T> | ((factor: number, particle?: Particle) => T);
/**
 * Represents a value that can be used to modify the properties of a particle over it's lifetime.
 */
export declare type ModuleFunction = (particle: Particle) => void;
/**
 * Represents the properties of a particle that are drivable through modules.
 */
export declare type DrivableProperties = Pick<Particle, "color" | "opacity" | "rotation" | "size">;
/**
 * Represents the possible, drivable keys of a particle.
 */
export declare type DrivableKey = keyof DrivableProperties;
/**
 * Represents the possible types of drivable keys.
 */
export declare type DrivableType = ValueOf<DrivableProperties>;
/**
 * Represents the possible factors of drivable values.
 */
export declare type DrivableFactor = "lifetime" | "relativeLifetime" | "size";
/**
 * Represents a builder for particle modules. Returns an evaluatable module
 * function, that can be consumed by emitters.
 *
 * @remarks
 * Not all properties can be driven. TypeScript will validate this at compile time,
 * but no internal validation is performed due to performance reasons. Also, note
 * that the driving factor is "lifetime" by default.
 *
 * @example
 * ```ts
 * new ModuleBuilder()
 *     .drive("size")
 *     .by((t) => t * 2)
 *     .through("lifetime")
 *     .build();
 * ```
 */
export declare class ModuleBuilder {
    /**
     * The specified key of the builder.
     */
    protected driverKey?: DrivableKey;
    /**
     * The value to drive the property with.
     */
    protected driverValue?: ModuleDriverValue<DrivableType>;
    /**
     * The factor driving the built function.
     *
     * @defaultValue "lifetime"
     */
    protected factor: DrivableFactor;
    protected isRelative: boolean;
    /**
     * Specifies the key in the particle that should be driven.
     *
     * @remarks
     * Note that not all of a particle's properties are drivable through modules. If you
     * need full control of a particle inside of a module, you can use a module function directly.
     *
     * @returns The chained builder instance.
     */
    drive<TKey extends DrivableKey>(key: TKey): ModuleBuilder;
    /**
     * Specifies the factor to drive the evaluated value by. Supports "lifetime" and "size".
     *
     * @returns The chained builder instance.
     */
    through(factor: DrivableFactor): ModuleBuilder;
    /**
     * Specifies the value to drive the module behaviour by. This can be a constant,
     * a spline or an evaluable function. Note that in the last case, the driving
     * factor is passed as a parameter.
     *
     * @returns The chained builder instance.
     */
    by<TDriver extends DrivableType>(driver: ModuleDriverValue<TDriver>): ModuleBuilder;
    /**
     * Specifies that the module function is supposed to act relative to the
     * properties initial value.
     *
     * @remarks
     * Note that this is only possible if an "initial*" property exists on the
     * particle object. The operation applied to the initial and new value
     * is dependant on their type:
     * - `Vector`: Both vectors are added.
     * - `number`: Both numbers are multiplied.
     *
     * For more advanced relative customizations, consider using the particle
     * object in the driver value function instead, like:
     * ```ts
     * .by((t, p) => p.initialSize + t * 2);
     * ```
     */
    relative(isRelative?: boolean): ModuleBuilder;
    /**
     * Consumes the builder and returns an evaluatable module function.
     *
     * @remarks
     * Note that you need to specify the driving key and value, otherwise an error
     * will be thrown.
     */
    build(): ModuleFunction;
}
export {};
