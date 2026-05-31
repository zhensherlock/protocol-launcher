import type { BikeOutlinerOpenRowLinkPayload } from './shared'

/**
 * Open an existing Bike Outliner row link or path row link.
 *
 * @param payload Existing Bike Outliner row link payload.
 * @returns Bike Outliner row link URL.
 * @example
 * openRowLink({ url: 'bike://KOcw9x9N/ch#zf' })
 * // => 'bike://KOcw9x9N/ch#zf'
 * @link https://bikeguide.hogbaysoftware.com/using-bike/using-links
 */
export function openRowLink(payload: BikeOutlinerOpenRowLinkPayload) {
  const { url } = payload

  return url
}
