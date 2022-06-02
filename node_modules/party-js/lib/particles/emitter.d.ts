import { EmissionOptions, EmitterOptions, RenderOptions } from "./options";
import { Particle } from "./particle";
/**
 * Defines the set of options that can be used when creating a new emitter.
 */
export interface EmitterConstructionOptions {
    emitterOptions?: Partial<EmitterOptions>;
    emissionOptions?: Partial<EmissionOptions>;
    rendererOptions?: Partial<RenderOptions>;
}
/**
 * Represents an emitter that is responsible for spawning and updating particles.
 *
 * Particles themselves are just data-holders, with the system acting upon them and
 * modifying them. The modifications are done mainly via modules, that use the
 * particle's data together with some function to apply temporal transitions.
 *
 * @see Particle
 * @see ParticleModifierModule
 */
export declare class Emitter {
    /**
     * The particles currently contained within the system.
     */
    readonly particles: Particle[];
    /**
     * The main options of the emitter.
     */
    readonly options: EmitterOptions;
    /**
     * The emission options of the emitter.
     */
    readonly emission: EmissionOptions;
    /**
     * The renderer options of the emitter.
     */
    readonly renderer: RenderOptions;
    private currentLoop;
    private durationTimer;
    private emissionTimer;
    private attemptedBurstIndices;
    /**
     * Checks if the emitter is already expired and can be removed.
     * Expired emitters do not emit new particles.
     */
    get isExpired(): boolean;
    /**
     * Checks if the emitter can safely be removed.
     * This is true if no more particles are active.
     */
    get canRemove(): boolean;
    /**
     * Creates a new emitter, using default options.
     */
    constructor(options?: EmitterConstructionOptions);
    /**
     * Clears all particles inside the emitter.
     *
     * @returns The number of cleared particles.
     */
    clearParticles(): number;
    /**
     * Processes a tick of the emitter, using the elapsed time.
     *
     * @remarks
     * This handles a few things, namely:
     * - Incrementing the duration timer and potentially incrementing the loop.
     * - Handling particle bursts & emissions.
     * - Despawning particles conditionally.
     *
     * @param delta The time, in seconds, passed since the last tick.
     */
    tick(delta: number): void;
    /**
     * Performs an internal tick for the particle.
     *
     * @remarks
     * This method controls the particle's lifetime, location and velocity, according
     * to the elapsed delta and the configuration. Additionally, each of the emitter's
     * modules is applied to the particle.
     *
     * @param particle The particle to apply the tick for.
     * @param delta The time, in seconds, passed since the last tick.
     */
    private tickParticle;
    /**
     * Emits a particle using the registered settings.
     * Also may despawn a particle if the maximum number of particles is exceeded.
     */
    private emitParticle;
}
