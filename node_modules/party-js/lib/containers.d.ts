import { Lazy } from "./util";
/**
 * Represents the root container for DOM elements of the library.
 */
export declare const rootContainer: Lazy<HTMLElement>;
/**
 * Represents the debugging container of the library, only active if debugging is enabled.
 */
export declare const debugContainer: Lazy<HTMLElement>;
/**
 * Represents the particle container of the library.
 * This is where the particle DOM elements get rendered into.
 */
export declare const particleContainer: Lazy<HTMLElement>;
