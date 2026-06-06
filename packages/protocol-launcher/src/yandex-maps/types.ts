export type YandexMapsAppLayer = 'map' | 'sat' | 'skl' | 'pmap' | 'trf'

export type YandexMapsWebLayer = 'map' | 'sat' | 'skl' | 'trf'

export type YandexMapsAppRouteType = 'auto' | 'mt' | 'pd'

export type YandexMapsWebRouteType = YandexMapsAppRouteType | 'bc'

export interface YandexMapsAppMapParameters {
  /**
   * Map center coordinates, formatted as "longitude,latitude".
   */
  ll?: string

  /**
   * Map zoom.
   */
  z?: number | string

  /**
   * Viewport size, formatted as "longitudeDelta,latitudeDelta".
   */
  spn?: string

  /**
   * Map type and traffic information.
   */
  l?: YandexMapsAppLayer | readonly YandexMapsAppLayer[]
}

export interface YandexMapsAppAreaParameters {
  /**
   * Map center coordinates, formatted as "longitude,latitude".
   */
  ll?: string

  /**
   * Map zoom.
   */
  z?: number | string

  /**
   * Viewport size, formatted as "longitudeDelta,latitudeDelta".
   */
  spn?: string
}

export interface YandexMapsAppPlacemarkParameters {
  /**
   * Map center coordinates, formatted as "longitude,latitude".
   */
  ll?: string

  /**
   * Map zoom.
   */
  z?: number | string

  /**
   * Map type and traffic information.
   */
  l?: YandexMapsAppLayer | readonly YandexMapsAppLayer[]
}

export interface YandexMapsWebMapParameters {
  /**
   * Map center coordinates, formatted as "longitude,latitude".
   */
  ll?: string

  /**
   * Map zoom.
   */
  z?: number | string

  /**
   * Viewport size, formatted as "longitudeDelta,latitudeDelta".
   */
  spn?: string

  /**
   * Map type and traffic information.
   */
  l?: YandexMapsWebLayer | readonly YandexMapsWebLayer[]
}

export interface YandexMapsWebAreaParameters {
  /**
   * Map center coordinates, formatted as "longitude,latitude".
   */
  ll?: string

  /**
   * Map zoom.
   */
  z?: number | string

  /**
   * Viewport size, formatted as "longitudeDelta,latitudeDelta".
   */
  spn?: string
}

export interface YandexMapsWebPlacemarkParameters {
  /**
   * Map center coordinates, formatted as "longitude,latitude".
   */
  ll?: string

  /**
   * Map zoom.
   */
  z?: number | string

  /**
   * Map type and traffic information.
   */
  l?: YandexMapsWebLayer | readonly YandexMapsWebLayer[]
}

export type YandexMapsOpenMap = YandexMapsAppMapParameters

export interface YandexMapsShowPoint extends YandexMapsAppPlacemarkParameters {
  /**
   * Placemark coordinates, formatted as "longitude,latitude".
   */
  pt: string
}

export interface YandexMapsSearch extends YandexMapsAppAreaParameters {
  /**
   * Text of the search query.
   */
  text: string
}

export interface YandexMapsOpenOrganizationCard {
  /**
   * Unique organization ID in the Yandex Maps app.
   */
  oid: number | string
}

export interface YandexMapsShowWhatsHere {
  /**
   * Object coordinates, formatted as "longitude,latitude".
   */
  point: string

  /**
   * Map zoom.
   */
  zoom: number | string
}

export interface YandexMapsRoute {
  /**
   * Start and end points, formatted as "latitude,longitude~latitude,longitude".
   */
  rtext: string

  /**
   * Route type.
   */
  rtt?: YandexMapsAppRouteType
}

export interface YandexMapsPanorama {
  /**
   * Panorama point coordinates, formatted as "longitude,latitude".
   */
  point: string

  /**
   * View direction, formatted as "directionAzimuth,elevationAngle".
   */
  direction: string

  /**
   * Viewport size, formatted as "horizontalSize,verticalSize".
   */
  span: string
}

export interface YandexMapsAndroidGeo {
  /**
   * Map center coordinates, formatted as "latitude,longitude".
   */
  coordinates: string

  /**
   * Map zoom.
   */
  z: number | string
}

export type YandexMapsWebMap = YandexMapsWebMapParameters

export interface YandexMapsWebShowPoint extends YandexMapsWebPlacemarkParameters {
  /**
   * Placemark coordinates, formatted as "longitude,latitude".
   */
  pt: string
}

export interface YandexMapsWebShowPoints extends YandexMapsWebPlacemarkParameters {
  /**
   * Multiple placemark coordinates separated by "~".
   */
  pt: string
}

export interface YandexMapsWebSearch extends YandexMapsWebAreaParameters {
  /**
   * Text of the search query.
   */
  text: string
}

export interface YandexMapsWebRoute {
  /**
   * Route points, formatted as "latitude,longitude~latitude,longitude".
   */
  rtext: string

  /**
   * Route type.
   */
  rtt?: YandexMapsWebRouteType
}
