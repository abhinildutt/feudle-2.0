import { Vector } from "../components/vector";
import { Emitter } from "./emitter";
import { Particle } from "./particle";
/**
 * Represents a renderer used to draw particles to the DOM via HTML
 * elements. Additionally, it is responsible for purging the elements
 * of destroyed particles from the DOM.
 */
export declare class Renderer {
    /**
     * The lookup of elements currently handled by the renderer, with the
     * particle ID as key and a HTMLElement as the value.
     */
    elements: Map<symbol, HTMLElement>;
    /**
     * The normalized direction the light comes from.
     */
    light: Vector;
    /**
     * The collection of symbols containing the particles that were rendered this frame.
     * This is, for example, used to delete unused particles from the DOM.
     */
    private renderedParticles;
    /**
     * Whether or not the renderer should actually draw particles.
     */
    private enabled;
    constructor();
    /**
     * Begins a new render block. During the rendering phase, a list of rendered particles
     * is tracked, so that stale particles can be removed later.
     */
    begin(): void;
    /**
     * Terminates an existing render block. This checks which particles were rendered
     * during the block and purges all unused HTMLElements from the DOM.
     *
     * @returns The amount of particles that were rendered.
     */
    end(): number;
    /**
     * Renders an individual particle to the DOM. If the particle is rendered for the first
     * time, a HTMLElement will be created using the emitter's render settings.
     *
     * @param particle The particle to be rendered.
     * @param emitter The system containing the particle.
     */
    renderParticle(particle: Particle, emitter: Emitter): void;
    /**
     * Creates the HTMLElement for a particle that does not have one already.
     */
    private createParticleElement;
}
