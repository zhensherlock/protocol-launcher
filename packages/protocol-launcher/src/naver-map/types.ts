export type NaverMapActionPath =
  | 'map'
  | 'search'
  | 'search/bus'
  | 'place'
  | 'route/public'
  | 'route/car'
  | 'route/walk'
  | 'route/bicycle'
  | 'navigation'

export type NaverMapRouteMode = 'public' | 'car' | 'walk' | 'bicycle'

export interface NaverMapAttribution {
  /**
   * Identifies the calling app or web page. NAVER Map requires this parameter.
   */
  appname: string
}

export interface NaverMapOpenMap extends NaverMapAttribution {
  /**
   * Latitude of the map center.
   */
  lat?: number | string

  /**
   * Longitude of the map center.
   */
  lng?: number | string

  /**
   * Zoom level.
   */
  zoom?: number | string
}

export interface NaverMapSearch extends NaverMapAttribution {
  /**
   * Search query.
   */
  query: string
}

export interface NaverMapShowPoint extends NaverMapAttribution {
  /**
   * Latitude of the marker.
   */
  lat: number | string

  /**
   * Longitude of the marker.
   */
  lng: number | string

  /**
   * Marker name.
   */
  name: string
}

export interface NaverMapRoutePoints {
  /**
   * Start latitude.
   */
  slat?: number | string

  /**
   * Start longitude.
   */
  slng?: number | string

  /**
   * Start name.
   */
  sname?: string

  /**
   * Start coordinate-system value from NAVER's URL Scheme example.
   */
  secoords?: string

  /**
   * Destination latitude.
   */
  dlat: number | string

  /**
   * Destination longitude.
   */
  dlng: number | string

  /**
   * Destination name.
   */
  dname?: string

  /**
   * Destination coordinate-system value from NAVER's URL Scheme example.
   */
  decoords?: string

  /**
   * Waypoint 1 latitude.
   */
  v1lat?: number | string

  /**
   * Waypoint 1 longitude.
   */
  v1lng?: number | string

  /**
   * Waypoint 1 name.
   */
  v1name?: string

  /**
   * Waypoint 1 coordinate-system value from NAVER's URL Scheme example.
   */
  v1ecoords?: string

  /**
   * Waypoint 2 latitude.
   */
  v2lat?: number | string

  /**
   * Waypoint 2 longitude.
   */
  v2lng?: number | string

  /**
   * Waypoint 2 name.
   */
  v2name?: string

  /**
   * Waypoint 3 latitude.
   */
  v3lat?: number | string

  /**
   * Waypoint 3 longitude.
   */
  v3lng?: number | string

  /**
   * Waypoint 3 name.
   */
  v3name?: string

  /**
   * Waypoint 4 latitude.
   */
  v4lat?: number | string

  /**
   * Waypoint 4 longitude.
   */
  v4lng?: number | string

  /**
   * Waypoint 4 name.
   */
  v4name?: string

  /**
   * Waypoint 5 latitude.
   */
  v5lat?: number | string

  /**
   * Waypoint 5 longitude.
   */
  v5lng?: number | string

  /**
   * Waypoint 5 name.
   */
  v5name?: string
}

export interface NaverMapRoute extends NaverMapAttribution, NaverMapRoutePoints {
  /**
   * Official route action path segment.
   */
  mode: NaverMapRouteMode
}

export type NaverMapNavigation = NaverMapAttribution & Partial<NaverMapRoutePoints>
