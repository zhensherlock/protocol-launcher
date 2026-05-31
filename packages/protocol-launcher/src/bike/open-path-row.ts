import { type BikePathRowLinkPayload, encodeBikeId, encodeBikePath } from './shared'

/**
 * Open a Bike path row link by outline file path.
 *
 * @param payload Bike path row link payload.
 * @returns Bike path row link URL.
 * @example
 * openPathRow({
 *   path: '/Users/jessegrosjean/Documents/todo.bike',
 *   selectedId: 'aF',
 * })
 * // => 'bike:///Users/jessegrosjean/Documents/todo.bike#aF'
 * @link https://bikeguide.hogbaysoftware.com/using-bike/using-links
 */
export function openPathRow(payload: BikePathRowLinkPayload) {
  const { path, selectedId } = payload

  return `bike:///${encodeBikePath(path)}#${encodeBikeId(selectedId)}`
}
