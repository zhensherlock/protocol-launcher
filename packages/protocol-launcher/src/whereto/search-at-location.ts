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
 * Search at location payload definition.
 */
type SearchAtLocation = {
  /**
   * The category or name to be searched.
   */
  search: string
  /**
   * The location to search at.
   */
  location: Location
}

/**
 * Search for a category at a specific location in Where To?.
 *
 * @param payload Search at location payload.
 * @returns Where To? search at location URL.
 * @example
 * searchAtLocation({
 *   search: 'Cafe',
 *   location: { lat: 37.332331, lon: -122.031219 },
 * })
 * // => 'whereto://?search=Cafe&location=37.332331,-122.031219'
 * @link https://www.futuretap.com/api/whereto
 */
export function searchAtLocation(payload: SearchAtLocation) {
  const { search, location } = payload
  const locationValue = `${location.lat},${location.lon}`

  return `whereto://?search=${encodeURIComponent(search)}&location=${locationValue}`
}
