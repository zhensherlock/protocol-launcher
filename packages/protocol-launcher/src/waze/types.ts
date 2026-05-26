/**
 * Waze URL protocol.
 */
export type WazeProtocol = 'https' | 'waze'

/**
 * Waze favorite destination.
 */
export type WazeFavorite = 'work' | 'home'

/**
 * Shared Waze Deep Link options.
 */
export type WazeDeepLinkOptions = {
  /**
   * URL protocol to use.
   *
   * Use `waze` only when the Waze app is known to be installed.
   * Defaults to `https`.
   */
  protocol?: WazeProtocol

  /**
   * Partner source value for Waze support and issue resolution.
   */
  utmSource?: string
}

/**
 * Waze search payload definition.
 */
export type WazeSearch = WazeDeepLinkOptions & {
  /**
   * Search terms.
   */
  q: string
}

/**
 * Waze search and navigate payload definition.
 */
export type WazeSearchAndNavigate = WazeDeepLinkOptions & {
  /**
   * Search terms.
   */
  q: string

  /**
   * Latitude and longitude, formatted as "latitude,longitude".
   */
  ll: string
}

/**
 * Waze map payload definition.
 */
export type WazeShowOnMap = WazeDeepLinkOptions & {
  /**
   * Latitude and longitude, formatted as "latitude,longitude".
   */
  ll?: string

  /**
   * Magnification level. Waze documents 6 as closest and 8192 as farthest.
   */
  z: number
}

/**
 * Waze location navigation payload definition.
 */
export type WazeNavigateToLocation = WazeDeepLinkOptions & {
  /**
   * Latitude and longitude, formatted as "latitude,longitude".
   */
  ll: string

  /**
   * Zoom value documented in Waze Live Map shared driving direction links.
   */
  zoom?: number
}

/**
 * Waze favorite navigation payload definition.
 */
export type WazeNavigateToFavorite = WazeDeepLinkOptions & {
  /**
   * Favorite saved in the Waze app.
   */
  favorite: WazeFavorite
}
