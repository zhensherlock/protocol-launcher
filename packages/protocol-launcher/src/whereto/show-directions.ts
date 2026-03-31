/**
 * Location definition.
 */
type Location = {
  /**
   * Latitude.
   *
   * @example 37.332331
   */
  lat: number
  /**
   * Longitude.
   *
   * @example -122.031219
   */
  lon: number
}

/**
 * Directions mode definition.
 */
type DirectionsMode =
  | 'whereto'
  | 'car'
  | 'bike'
  | 'pedestrian'
  | 'transit'
  | 'bmw'
  | 'mercedes-benz'
  | 'myaudi'
  | string

/**
 * Show directions payload definition.
 */
type ShowDirections = {
  /**
   * The POI (Point of Interest) identifier.
   * Mutually exclusive with location.
   */
  poi?: string
  /**
   * The location to navigate to.
   * Mutually exclusive with poi.
   */
  location?: Location
  /**
   * The directions mode.
   *
   * @example 'car'
   * @example 'bike'
   * @example 'pedestrian'
   * @example 'transit'
   */
  mode: DirectionsMode
}

/**
 * Show directions to a location or POI in Where To?.
 *
 * @param payload Show directions payload.
 * @returns Where To? show directions URL.
 * @example
 * showDirections({
 *   location: { lat: 37.332331, lon: -122.031219 },
 *   mode: 'car',
 * })
 * // => 'whereto://?location=37.332331,-122.031219&showDirections=car'
 * @example
 * showDirections({
 *   poi: '7415861409383649399',
 *   mode: 'bike',
 * })
 * // => 'whereto://?poi=7415861409383649399&showDirections=bike'
 * @link https://www.futuretap.com/api/whereto
 */
export function showDirections(payload: ShowDirections) {
  const { poi, location, mode } = payload
  const params: string[] = [`showDirections=${mode}`]

  if (poi) {
    params.unshift(`poi=${poi}`)
  }

  if (location) {
    const locationValue = `${location.lat},${location.lon}`
    params.unshift(`location=${locationValue}`)
  }

  return `whereto://?${params.join('&')}`
}
