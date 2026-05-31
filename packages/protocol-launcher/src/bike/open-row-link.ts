import type { BikeOpenRowLinkPayload } from './shared'

/**
 * Open an existing Bike row link or path row link.
 *
 * @param payload Existing Bike row link payload.
 * @returns Bike row link URL.
 * @example
 * openRowLink({ url: 'bike://KOcw9x9N/ch#zf' })
 * // => 'bike://KOcw9x9N/ch#zf'
 * @link https://bikeguide.hogbaysoftware.com/using-bike/using-links
 */
export function openRowLink(payload: BikeOpenRowLinkPayload) {
  const { url } = payload

  return url
}
