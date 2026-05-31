import { type BikeOutlinerRowLinkPayload, encodeBikeOutlinerId } from './shared'

/**
 * Open a Bike Outliner row link by document root id.
 *
 * @param payload Bike Outliner row link payload.
 * @returns Bike Outliner row link URL.
 * @example
 * openRow({
 *   rootId: 'KOcw9x9N',
 *   focusId: 'ch',
 *   selectedId: 'zf',
 * })
 * // => 'bike://KOcw9x9N/ch#zf'
 * @link https://bikeguide.hogbaysoftware.com/using-bike/using-links
 */
export function openRow(payload: BikeOutlinerRowLinkPayload) {
  const { rootId, focusId, selectedId } = payload
  const focusPath = focusId ? `/${encodeBikeOutlinerId(focusId)}` : ''
  const selectedFragment = selectedId ? `#${encodeBikeOutlinerId(selectedId)}` : ''

  return `bike://${encodeBikeOutlinerId(rootId)}${focusPath}${selectedFragment}`
}
