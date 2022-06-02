import { Color, Vector } from "../components";
/**
 * Represents a set of options that can be used to create the particle.
 */
export declare type ParticleCreationOptions = Partial<Omit<Particle, "id" | "initialLifetime" | "initialSize" | "initialRotation">>;
/**
 * Represents an emitted particle.
 */
export declare class Particle {
    /**
     * The unique (symbolic) ID of the particle.
     */
    id: symbol;
    /**
     * The remaining lifetime of the particle.
     */
    lifetime: number;
    /**
     * The current size of the particle.
     */
    size: number;
    /**
     * The current location of the particle, in pixels.
     */
    location: Vector;
    /**
     * The current rotation of the particle, in euler angles, in degrees.
     */
    rotation: Vector;
    /**
     * The current velocity of the particle.
     */
    velocity: Vector;
    /**
     * The current color of the particle.
     */
    color: Color;
    /**
     * The opacity of the particle (from 0 to 1).
     */
    opacity: number;
    /**
     * The initial lifetime of the particle.
     */
    initialLifetime: number;
    /**
     * The initial size of the particle.
     */
    initialSize: number;
    /**
     * The initial rotation of the particle.
     */
    initialRotation: Vector;
    /**
     * Creates a new particle instance through the specified options.
     */
    constructor(options: ParticleCreationOptions);
}
