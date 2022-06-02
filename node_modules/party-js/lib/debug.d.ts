import { Scene } from "./scene";
/**
 * Represents a utility module to view debug information inside the DOM.
 * This is disabled by default and needs to manually be enabled by setting
 * the '.enabled' field to true.
 *
 * While disabled, the utility will not fetch stats and update itself.
 */
export declare class Debug {
    private scene;
    /**
     * The rate at which the debug interface should refresh itself (per second).
     */
    private readonly refreshRate;
    /**
     * The timer counting down to refreshes.
     */
    private refreshTimer;
    /**
     * Registers a new debug utility that is attached to the given scene.
     *
     * @param scene The scene to attach to.
     */
    constructor(scene: Scene);
    /**
     * Processes a tick event in the interface. This checks if enough has passed to
     * trigger a refresh, and if so, fetches the debug information and updates the DOM.
     *
     * @param delta The time that has elapsed since the last tick.
     */
    tick(delta: number): void;
    /**
     * Fetches the debug information from the specified delta and the linked scene.
     *
     * @returns An array of debugging information, formatted as HTML.
     */
    private getDebugInformation;
}
