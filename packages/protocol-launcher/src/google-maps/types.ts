export type GoogleMapsMapMode = 'standard' | 'streetview'

export type GoogleMapsView = 'satellite' | 'traffic' | 'transit'

export type GoogleMapsDirectionsMode = 'driving' | 'transit' | 'bicycling' | 'walking'

export type GoogleMapsViewport = {
  /**
   * The map viewport center point, formatted as "latitude,longitude".
   */
  center?: string

  /**
   * The zoom level of the map.
   */
  zoom?: number
}

export type GoogleMapsDisplayMap = GoogleMapsViewport & {
  /**
   * The kind of map shown.
   */
  mapmode?: GoogleMapsMapMode

  /**
   * Views to turn on/off. Multiple values are comma-separated.
   * Pass an empty string to clear all views.
   */
  views?: GoogleMapsView | readonly GoogleMapsView[] | ''
}

export type GoogleMapsSearch = GoogleMapsDisplayMap & {
  /**
   * The query string for the search.
   */
  q: string
}

export type GoogleMapsDirections = GoogleMapsViewport & {
  /**
   * The starting point for directions. Leave blank to use the user's current location.
   */
  saddr?: string

  /**
   * The end point for directions.
   */
  daddr: string

  /**
   * The transportation mode.
   */
  directionsmode?: GoogleMapsDirectionsMode
}

export type GoogleMapsUrl = {
  /**
   * A supported Google Maps desktop URL matching the official URL scheme regular expression.
   */
  url: string
}
