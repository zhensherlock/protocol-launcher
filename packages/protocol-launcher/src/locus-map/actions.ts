import { locusActionsUrl } from './shared'
import type { LocusMapActionsPayload } from './types'

/**
 * Build a Locus Map actions URL for a hosted XML actions file.
 *
 * @param payload Locus Map actions payload.
 * @returns Locus Map actions URL.
 * @example
 * actions({
 *   url: 'https://example.com/path/to/actions.xml',
 * })
 * // => 'locus-actions://https/example.com/path/to/actions.xml'
 * @link https://docs.locusmap.app/doku.php?id=manual%3Aadvanced%3Acustomization%3Aactions
 */
export function actions(payload: LocusMapActionsPayload) {
  return locusActionsUrl(payload)
}
