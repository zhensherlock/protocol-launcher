import { qs } from '@protocol-launcher/shared'

/**
 * Show place payload definition.
 */
type ShowPlace = {
  /**
   * The POI (Point of Interest) identifier.
   *
   * @example '7415861409383649399'
   */
  poi: string
}

/**
 * Display a specific place in Where To? using its POI identifier.
 *
 * @param payload Show place payload.
 * @returns Where To? show place URL.
 * @example
 * showPlace({ poi: '7415861409383649399' })
 * // => 'whereto://?poi=7415861409383649399'
 * @link https://www.futuretap.com/api/whereto
 */
export function showPlace(payload: ShowPlace) {
  const { poi } = payload
  const params = qs({ poi })

  return `whereto://${params}`
}
