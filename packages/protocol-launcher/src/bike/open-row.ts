import { type BikeRowLinkPayload, encodeBikeId } from './shared'

/**
 * Open a Bike row link by document root id.
 *
 * @param payload Bike row link payload.
 * @returns Bike row link URL.
 * @example
 * openRow({
 *   rootId: 'KOcw9x9N',
 *   focusId: 'ch',
 *   selectedId: 'zf',
 * })
 * // => 'bike://KOcw9x9N/ch#zf'
 * @link https://bikeguide.hogbaysoftware.com/using-bike/using-links
 */
export function openRow(payload: BikeRowLinkPayload) {
  const { rootId, focusId, selectedId } = payload
  const focusPath = focusId ? `/${encodeBikeId(focusId)}` : ''
  const selectedFragment = selectedId ? `#${encodeBikeId(selectedId)}` : ''

  return `bike://${encodeBikeId(rootId)}${focusPath}${selectedFragment}`
}
