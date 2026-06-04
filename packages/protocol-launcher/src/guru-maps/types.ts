/**
 * Coordinates formatted as "latitude,longitude".
 */
export type GuruMapsCoordinates = string

/**
 * Guru Maps back URL options.
 */
export type GuruMapsBackUrlOptions = {
  /**
   * URL opened when the user presses the Escape button in Guru Maps.
   */
  backUrl?: string
}

/**
 * Guru Maps launch payload definition.
 */
export type GuruMapsOpen = GuruMapsBackUrlOptions

/**
 * Guru Maps file import payload definition.
 */
export type GuruMapsImportFile = {
  /**
   * URL link to the file for import.
   */
  url: string
}

/**
 * Guru Maps search payload definition.
 */
export type GuruMapsSearch = GuruMapsBackUrlOptions & {
  /**
   * Search string.
   */
  q: string

  /**
   * Coordinates of the point over which the search will launch.
   */
  coord?: GuruMapsCoordinates
}

/**
 * Guru Maps navigation mode.
 */
export type GuruMapsNavigationMode =
  | 'auto'
  | 'bicycle'
  | 'pedestrian'
  | 'motor_scooter'
  | 'motorcycle'
  | 'truck'
  | 'straight'

/**
 * Guru Maps navigation payload definition.
 */
export type GuruMapsNavigate = GuruMapsBackUrlOptions & {
  /**
   * Coordinates of the route endpoint.
   */
  finish: GuruMapsCoordinates

  /**
   * Intermediate route point coordinates. Multiple values produce repeated `via` parameters.
   */
  via?: GuruMapsCoordinates | readonly GuruMapsCoordinates[]

  /**
   * Coordinates of the starting point of the route.
   */
  start?: GuruMapsCoordinates

  /**
   * Mode of transportation. Defaults to `auto` in Guru Maps when omitted.
   */
  mode?: GuruMapsNavigationMode

  /**
   * Start navigation immediately after the route is built.
   */
  startNavigation?: boolean
}

/**
 * Guru Maps track recording action.
 */
export type GuruMapsRecordTrackAction = 'start' | 'stop' | 'toggle'

/**
 * Guru Maps track recording payload definition.
 */
export type GuruMapsRecordTrack = {
  /**
   * Track recording action. Guru Maps defaults to `toggle` when omitted.
   */
  action?: GuruMapsRecordTrackAction
}

/**
 * Guru Maps marker creation payload definition.
 */
export type GuruMapsSaveMarker = {
  /**
   * Marker name.
   */
  name?: string

  /**
   * Marker coordinates.
   */
  coord?: GuruMapsCoordinates
}

/**
 * Guru Maps place display payload definition.
 */
export type GuruMapsShowPlace = GuruMapsBackUrlOptions & {
  /**
   * Coordinates of the place to be displayed on the map.
   */
  coord: GuruMapsCoordinates

  /**
   * Optional zoom level appended to the `place` value.
   */
  zoom?: number
}

/**
 * Guru Maps geo scheme payload definition.
 */
export type GuruMapsGeo = {
  /**
   * Coordinates to display with the `geo:` scheme.
   */
  coord: GuruMapsCoordinates
}
