import { qs } from '@protocol-launcher/shared'

/**
 * Apple Map URL scheme definition.
 */
export interface AppleMap {
  /**
   * The map type.
   * - `m` (standard view)
   * - `k` (satellite view)
   * - `h` (hybrid view)
   * - `r` (transit view)
   */
  t?: 'm' | 'k' | 'h' | 'r'

  /**
   * The query. Treated as if typed into Maps search field.
   * Can also be used as a label if location is defined in `ll` or `address`.
   */
  q?: string

  /**
   * The address. Displays specified location without searching.
   */
  address?: string

  /**
   * A hint used during search. Represents latitude and longitude.
   */
  near?: string

  /**
   * The location around which the map should be centered.
   * Format: "latitude,longitude"
   */
  ll?: string

  /**
   * The zoom level (2-21). Can only be used with `ll` parameter.
   */
  z?: number

  /**
   * The area around the center point (span).
   * Format: "latitudinalDelta,longitudinalDelta"
   * Cannot be used with `z` parameter.
   */
  spn?: string

  /**
   * The source address for directions.
   */
  saddr?: string

  /**
   * The destination address for directions.
   */
  daddr?: string

  /**
   * The transport type for directions.
   * - `d` (by car)
   * - `w` (by foot)
   * - `r` (by public transit)
   */
  dirflg?: 'd' | 'w' | 'r'

  /**
   * The search location.
   * Format: "latitude,longitude"
   */
  sll?: string

  /**
   * The screen span around search location.
   * Format: "latitudinalDelta,longitudinalDelta"
   */
  sspn?: string
}

/**
 * Open Apple Maps with specified options.
 *
 * @param payload - Map options for search, directions, or location display.
 * @returns Apple Maps URL.
 * @example
 * // Search for a place
 * open({ q: 'pizza' })
 * // => 'maps://?q=pizza'
 *
 * @example
 * // Display a specific location
 * open({ ll: '50.894967,4.341626' })
 * // => 'maps://?ll=50.894967%2C4.341626'
 *
 * @example
 * // Get driving directions
 * open({ saddr: 'San Jose', daddr: 'San Francisco', dirflg: 'd' })
 * // => 'maps://?saddr=San%20Jose&daddr=San%20Francisco&dirflg=d'
 *
 * @link https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
 */
export function open(payload: AppleMap = {}) {
  const { t, q, address, near, ll, z, spn, saddr, daddr, dirflg, sll, sspn } = payload

  const params = qs({
    ...(t ? { t } : {}),
    ...(q ? { q } : {}),
    ...(address ? { address } : {}),
    ...(near ? { near } : {}),
    ...(ll ? { ll } : {}),
    ...(z ? { z } : {}),
    ...(spn ? { spn } : {}),
    ...(saddr ? { saddr } : {}),
    ...(daddr ? { daddr } : {}),
    ...(dirflg ? { dirflg } : {}),
    ...(sll ? { sll } : {}),
    ...(sspn ? { sspn } : {}),
  })

  return `maps://${params}`
}
