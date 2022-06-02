import { Particle } from "../particles/particle";
/**
 * Contains a set of pre-defined particle despawning rules.
 */
export declare const despawningRules: {
    /**
     * A rule that despawns a particle once its lifetime is over.
     */
    lifetime: (particle: Particle) => boolean;
    /**
     * A rule that despawns a particle once its y-coordinate is outside of the document.
     */
    bounds: (particle: Particle) => boolean;
};
