import { type BunchCallbacks, bunchUrl } from './shared'

/**
 * Reveal method payload definition.
 */
export type Reveal = BunchCallbacks

/**
 * Reveal the Bunch folder in Finder.
 *
 * @param payload Reveal method payload.
 * @returns Bunch reveal URL.
 * @example
 * reveal()
 * // => 'x-bunch://reveal'
 * @link https://bunchapp.co/docs/integration/url-handler/
 */
export function reveal(payload: Reveal = {}) {
  return bunchUrl('reveal', {}, payload)
}
