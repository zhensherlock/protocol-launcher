import { type BikeOutlinerPathRowLinkPayload, encodeBikeOutlinerId, encodeBikeOutlinerPath } from './shared'

/**
 * Open a Bike Outliner path row link by outline file path.
 *
 * @param payload Bike Outliner path row link payload.
 * @returns Bike Outliner path row link URL.
 * @example
 * openPathRow({
 *   path: '/Users/jessegrosjean/Documents/todo.bike',
 *   selectedId: 'aF',
 * })
 * // => 'bike:///Users/jessegrosjean/Documents/todo.bike#aF'
 * @link https://bikeguide.hogbaysoftware.com/using-bike/using-links
 */
export function openPathRow(payload: BikeOutlinerPathRowLinkPayload) {
  const { path, selectedId } = payload

  return `bike:///${encodeBikeOutlinerPath(path)}#${encodeBikeOutlinerId(selectedId)}`
}
