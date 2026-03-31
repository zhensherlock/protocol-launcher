import { qs } from '@protocol-launcher/shared'

/**
 * Lookup command payload definition.
 */
type Lookup = {
  /**
   * Text to look up.
   */
  text: string
}

/**
 * Open directly to a detail look up for a term in Terminology.
 *
 * @param payload Lookup command payload.
 * @returns Terminology lookup URL.
 * @example
 * lookup({ text: 'automation' })
 * // => 'terminology:///lookup?text=automation'
 * @link https://agiletortoise.com/terminology/automation
 */
export function lookup(payload: Lookup) {
  const { text } = payload
  const params = qs({ text })

  return `terminology:///lookup${params}`
}
