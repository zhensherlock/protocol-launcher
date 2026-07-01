/**
 * Coordinates formatted as "latitude,longitude", matching Organic Maps examples.
 */
export type OrganicMapsCoordinates = string

/**
 * Organic Maps launch methods documented for app links.
 */
export type OrganicMapsLaunchMethod = 'scheme' | 'https'

/**
 * Organic Maps shared-point links also document an HTTP form.
 */
export type OrganicMapsSharedPointLaunchMethod = OrganicMapsLaunchMethod | 'http'

/**
 * Organic Maps v1 route types documented on the API test page.
 */
export type OrganicMapsRouteType = 'vehicle' | 'pedestrian' | 'bicycle' | 'transit'

/**
 * Organic Maps v2 examples currently document drive mode.
 */
export type OrganicMapsV2Mode = 'drive'

/**
 * Organic Maps Android package names documented on the API test page.
 */
export type OrganicMapsAndroidPackage = 'app.organicmaps' | 'app.organicmaps.beta' | 'app.organicmaps.debug'

/**
 * Organic Maps point payload for `map?v=1` links.
 */
export interface OrganicMapsPoint {
  /**
   * Point coordinates.
   *
   * @example '22.17319,-159.65687'
   */
  ll: OrganicMapsCoordinates
  /**
   * Optional point title serialized as the documented `n` parameter.
   *
   * @example 'Kalalau Camping'
   */
  title?: string
}

/**
 * Shared-point short-code payload.
 */
export interface OrganicMapsShowSharedPoint {
  /**
   * Organic Maps short-code path segment from a shared point link.
   *
   * @example 'o4B4pYZsRs'
   */
  code: string
  /**
   * Optional title path segment.
   *
   * @example 'Zoo_Zürich'
   */
  title?: string
  /**
   * Preserve the documented trailing slash variant when there is no title.
   */
  trailingSlash?: boolean
  /**
   * Link form to generate. Defaults to `scheme`.
   */
  linkType?: OrganicMapsSharedPointLaunchMethod
}

/**
 * Multi-point map payload.
 */
export interface OrganicMapsShowMap {
  /**
   * One or more points serialized as repeated `ll` and optional `n` parameters.
   */
  points: readonly OrganicMapsPoint[]
  /**
   * Link form to generate. Defaults to `scheme`.
   */
  linkType?: OrganicMapsLaunchMethod
}

/**
 * Organic Maps v1 route endpoint.
 */
export interface OrganicMapsRoutePoint {
  /**
   * Endpoint coordinates.
   */
  ll: OrganicMapsCoordinates
  /**
   * Endpoint address/title serialized as `saddr` or `daddr`.
   */
  address: string
}

/**
 * Organic Maps v1 route payload.
 */
export interface OrganicMapsRoute {
  /**
   * Route start point.
   */
  start: OrganicMapsRoutePoint
  /**
   * Route destination point.
   */
  destination: OrganicMapsRoutePoint
  /**
   * Documented route type.
   */
  type: OrganicMapsRouteType
  /**
   * Link form to generate. Defaults to `scheme`.
   */
  linkType?: OrganicMapsLaunchMethod
}

/**
 * Organic Maps v2 directions payload.
 */
export interface OrganicMapsDirections {
  /**
   * Route origin coordinates.
   */
  origin: OrganicMapsCoordinates
  /**
   * Route origin name serialized as `origin_name`.
   */
  originName: string
  /**
   * Route destination coordinates.
   */
  destination: OrganicMapsCoordinates
  /**
   * Route destination name serialized as `destination_name`.
   */
  destinationName: string
  /**
   * Multi-stop route waypoints joined with `|`.
   */
  waypoints: readonly OrganicMapsCoordinates[]
  /**
   * Waypoint names joined with `|`.
   */
  waypointNames: readonly string[]
  /**
   * Documented v2 routing mode.
   */
  mode: OrganicMapsV2Mode
  /**
   * Link form to generate. Defaults to `scheme`.
   */
  linkType?: OrganicMapsLaunchMethod
}

/**
 * Organic Maps v2 navigation payload.
 */
export interface OrganicMapsNavigate {
  /**
   * Route origin coordinates or the documented `currentLocation` sentinel.
   */
  origin: OrganicMapsCoordinates | 'currentLocation'
  /**
   * Route destination coordinates.
   */
  destination: OrganicMapsCoordinates
  /**
   * Route destination name serialized as `destination_name`.
   */
  destinationName: string
  /**
   * Multi-stop route waypoints joined with `|`.
   */
  waypoints: readonly OrganicMapsCoordinates[]
  /**
   * Per-waypoint callback URLs joined with `|`.
   */
  waypointCallbacks: readonly string[]
  /**
   * Route completion callback URL.
   */
  callback: string
  /**
   * Documented v2 routing mode.
   */
  mode: OrganicMapsV2Mode
  /**
   * Link form to generate. Defaults to `scheme`.
   */
  linkType?: OrganicMapsLaunchMethod
}

/**
 * Organic Maps search payload.
 */
export interface OrganicMapsSearch {
  /**
   * Search query.
   */
  query: string
  /**
   * Coordinates around which the search should run.
   */
  cll?: OrganicMapsCoordinates
  /**
   * Search locale.
   */
  locale?: string
  /**
   * Documented empty `map=` flag.
   */
  map?: ''
  /**
   * Link form to generate. Defaults to `scheme`.
   */
  linkType?: OrganicMapsLaunchMethod
}

/**
 * Organic Maps handled Geo URI payload.
 */
export interface OrganicMapsGeo {
  /**
   * Coordinates to display or use as the search center.
   */
  coordinates: OrganicMapsCoordinates
  /**
   * Optional altitude from the documented Geo URI examples.
   */
  altitude?: number | string
  /**
   * Optional uncertainty value serialized as `;u=...`.
   */
  uncertainty?: number | string
  /**
   * Optional title serialized in parentheses after the coordinates.
   */
  title?: string
  /**
   * Optional Geo URI `q` query.
   */
  query?: string
  /**
   * Optional Geo URI `z` query.
   */
  zoom?: number | string
}

/**
 * Organic Maps position chooser payload.
 */
export interface OrganicMapsCrosshair {
  /**
   * Initial crosshair coordinates.
   */
  cll: OrganicMapsCoordinates
  /**
   * Calling app name serialized as `appname`.
   */
  appname: string
  /**
   * Link form to generate. Defaults to `scheme`.
   */
  linkType?: OrganicMapsLaunchMethod
}

/**
 * Organic Maps Android intent payload.
 */
export interface OrganicMapsAndroidIntent {
  /**
   * Organic Maps package name. Defaults to `app.organicmaps`.
   */
  packageName?: OrganicMapsAndroidPackage
}
