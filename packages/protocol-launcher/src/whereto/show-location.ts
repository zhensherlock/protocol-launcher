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
 * Show location payload definition.
 */
type ShowLocation = {
  /**
   * The location to display.
   */
  location: Location
  /**
   * Optional title/name of the location.
   *
   * @example 'Apple HQ'
   * @example 'Cafe Sunrise'
   */
  title?: string
}

/**
 * Display a specific location in Where To?.
 *
 * @param payload Show location payload.
 * @returns Where To? show location URL.
 * @example
 * showLocation({
 *   location: { lat: 37.332331, lon: -122.031219 },
 * })
 * // => 'whereto://?location=37.332331,-122.031219'
 * @example
 * showLocation({
 *   location: { lat: 37.332331, lon: -122.031219 },
 *   title: 'Apple HQ',
 * })
 * // => 'whereto://?location=37.332331,-122.031219&title=Apple%20HQ'
 * @link https://www.futuretap.com/api/whereto
 */
export function showLocation(payload: ShowLocation) {
  const { location, title } = payload
  const locationValue = `${location.lat},${location.lon}`
  const params = [`location=${locationValue}`]

  if (title) {
    params.push(`title=${encodeURIComponent(title)}`)
  }

  return `whereto://?${params.join('&')}`
}
