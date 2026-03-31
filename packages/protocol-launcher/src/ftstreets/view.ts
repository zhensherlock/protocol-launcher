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
 * // => 'ftstreets://?location=48.872112,2.332977'
 * @example
 * view({
 *   location: { lat: 48.872112, lng: 2.332977 },
 *   heading: 60,
 *   pitch: 7,
 *   title: 'Apple Store Opéra',
 * })
 * // => 'ftstreets://?location=48.872112,2.332977&heading=60&pitch=7&title=Apple%20Store%20Opéra'
 * @link https://www.futuretap.com/api/streets
 */
export function view(payload: View) {
  const { location, heading, pitch, title, pano } = payload
  const params = qs({
    location: `${location.lat},${location.lng}`,
    ...(heading !== undefined ? { heading } : {}),
    ...(pitch !== undefined ? { pitch } : {}),
    ...(title !== undefined ? { title } : {}),
    ...(pano !== undefined ? { pano } : {}),
  })

  return `ftstreets://${params}`
}
