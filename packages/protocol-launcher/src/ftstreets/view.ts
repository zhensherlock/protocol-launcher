import { qs } from '@protocol-launcher/shared'

/**
 * View panorama payload definition.
 */
type View = {
  /**
   * The location in latitude, longitude format.
   *
   * @example { lat: 48.872112, lng: 2.332977 }
   */
  location: {
    lat: number
    lng: number
  }
  /**
   * The viewing angle (north = 0).
   */
  heading?: number
  /**
   * The vertical viewing angle (0 = looking straight to the horizon, negative value looking down, positive value looking up).
   */
  pitch?: number
  /**
   * The title of the location.
   */
  title?: string
  /**
   * The Google panorama ID.
   */
  pano?: string
  /** Center latitude/longitude and latitude/longitude span. */
  region?: { lat: number; lng: number; latSpan: number; lngSpan: number }
  /** Copy the panorama to the clipboard (Streets 3.5+). */
  action?: 'clipboard'
  /** Requires action; receives control after the clipboard image is available. */
  xSuccess?: string
  /** Requires action and xSuccess; called when a panorama cannot be found. */
  xError?: string
  scheme?: 'ftstreets' | 'streets'
}

/**
 * View a Street View panorama for a given location.
 *
 * @param payload View panorama payload.
 * @returns Streets view URL.
 * @example
 * view({
 *   location: { lat: 48.872112, lng: 2.332977 },
 * })
 * // => 'ftstreets://?location=48.872112%2C2.332977'
 * @example
 * view({
 *   location: { lat: 48.872112, lng: 2.332977 },
 *   heading: 60,
 *   pitch: 7,
 *   title: 'Apple Store Opéra',
 * })
 * // => 'ftstreets://?location=48.872112%2C2.332977&heading=60&pitch=7&title=Apple%20Store%20Op%C3%A9ra'
 * @link https://www.futuretap.com/api/streets
 */
export function view(payload: View) {
  const { location, heading, pitch, title, pano, region, action, xSuccess, xError, scheme = 'ftstreets' } = payload
  const params = qs({
    location: `${location.lat},${location.lng}`,
    ...(heading !== undefined ? { heading } : {}),
    ...(pitch !== undefined ? { pitch } : {}),
    ...(title !== undefined ? { title } : {}),
    ...(pano !== undefined ? { pano } : {}),
    region: region ? `${region.lat},${region.lng},${region.latSpan},${region.lngSpan}` : undefined,
    action,
    'x-success': xSuccess,
    'x-error': xError,
  })

  return `${scheme}://${params}`
}
