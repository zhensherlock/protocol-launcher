import { foreFlightMobileMapSearchUrl } from './shared'

export type MapSearchPayload = {
  /**
   * Maps search string. ForeFlight documents this as any search string that works in-app.
   *
   * @example 'KISM OCF NITTS KSRQ 165 16 8000'
   */
  q: string
}

/**
 * Launch ForeFlight Mobile and search on the Maps view.
 *
 * @param payload ForeFlight Mobile map search payload.
 * @returns ForeFlight Mobile Maps search URL.
 * @example
 * mapSearch({ q: 'KISM OCF NITTS KSRQ 165 16 8000' })
 * // => 'foreflightmobile://maps/search?q=KISM+OCF+NITTS+KSRQ+165+16+8000'
 * @link https://foreflight.com/support/app-urls/
 */
export function mapSearch(payload: MapSearchPayload) {
  return foreFlightMobileMapSearchUrl(payload.q)
}
