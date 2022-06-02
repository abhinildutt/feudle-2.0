import { Debug } from "./debug";
import { Emitter, EmitterConstructionOptions } from "./particles/emitter";
import { Renderer } from "./particles/renderer";
/**
 * Represents a scene that contains emitters and their particles.
 *
 * Scenes are responsible for spawning and updating emitters, and
 * removing them once they are done.
 *
 * Scenes are not explicitely present in the DOM as an element, only
 * the contained particles are.
 */
export declare class Scene {
    /**
     * The emitters currently present in the scene.
     */
    emitters: Emitter[];
    /**
     * The debug instance associated with the scene.
     */
    readonly debug: Debug;
    /**
     * The renderer associated with the scene.
     */
    readonly renderer: Renderer;
    /**
     * The ID of the currently scheduled tick.
     */
    private scheduledTickId?;
    /**
     * The timestamp of the last tick, used to calculate deltas.
     *
     * @initialValue `performance.now()` (time origin)
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp
     */
    private lastTickTimestamp;
    /**
     * Initializes a new scene and starts the ticking job.
     */
    constructor();
    /**
     * Creates and returns a new, default emitter object.
     */
    createEmitter(options?: EmitterConstructionOptions): Emitter;
    /**
     * Clears all emitters from the scene.
     *
     * @returns The number of cleared emitters.
     */
    clearEmitters(): number;
    /**
     * Clears the particles from all emitters in the scene.
     * Note that this does not remove the actual emitter objects though.
     *
     * @returns The number of cleared particles.
     */
    clearParticles(): number;
    /**
     * Schedules a tick in the scene.
     */
    scheduleTick(): void;
    /**
     * Cancels a pending tick operation.
     */
    cancelTick(): void;
    /**
     * Processes a tick cycle, updating all emitters contained in the scene.
     * This is handled as a JS animation frame event, hence the passed timestamp.
     *
     * @remarks
     * The emitter ticking and particle rendering is run using try-catch blocks,
     * to ensure that we can recover from potential errors.
     *
     * @param timestamp The current timestamp of the animation frame.
     */
    private tick;
}
