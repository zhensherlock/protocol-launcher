export type YandexNavigatorCoordinate = number | string

export type YandexNavigatorNoBalloon = 0 | 1 | '0' | '1'

export interface YandexNavigatorAccessParameters {
  /**
   * Client identifier received with the Yandex Navigator access key.
   */
  client?: string

  /**
   * Signature generated from the source URL using the Yandex Navigator access key.
   */
  signature?: string
}

export interface YandexNavigatorViaPoint {
  /**
   * Latitude of an intermediate route point.
   */
  lat: YandexNavigatorCoordinate

  /**
   * Longitude of an intermediate route point.
   */
  lon: YandexNavigatorCoordinate
}

interface YandexNavigatorRouteDestination extends YandexNavigatorAccessParameters {
  /**
   * Latitude of the destination point.
   */
  lat_to: YandexNavigatorCoordinate

  /**
   * Longitude of the destination point.
   */
  lon_to: YandexNavigatorCoordinate
}

export type YandexNavigatorBuildRoute =
  | YandexNavigatorBuildRouteFromCurrentLocation
  | YandexNavigatorBuildRouteFromPoint
  | YandexNavigatorBuildRouteViaPoints

export interface YandexNavigatorBuildRouteFromCurrentLocation extends YandexNavigatorRouteDestination {
  lat_from?: never
  lon_from?: never
  via?: never
}

export interface YandexNavigatorBuildRouteFromPoint extends YandexNavigatorRouteDestination {
  /**
   * Latitude of the start point.
   */
  lat_from: YandexNavigatorCoordinate

  /**
   * Longitude of the start point.
   */
  lon_from: YandexNavigatorCoordinate

  via?: never
}

export interface YandexNavigatorBuildRouteViaPoints extends YandexNavigatorRouteDestination {
  /**
   * Latitude of the start point.
   */
  lat_from: YandexNavigatorCoordinate

  /**
   * Longitude of the start point.
   */
  lon_from: YandexNavigatorCoordinate

  /**
   * Intermediate route points serialized as `lat_via_0`, `lon_via_0`, and so on.
   */
  via: readonly [YandexNavigatorViaPoint, ...YandexNavigatorViaPoint[]]
}

export interface YandexNavigatorSearch extends YandexNavigatorAccessParameters {
  /**
   * Text of the search query.
   */
  text: string
}

export interface YandexNavigatorShowPoint extends YandexNavigatorAccessParameters {
  /**
   * Latitude of the point.
   */
  lat: YandexNavigatorCoordinate

  /**
   * Longitude of the point.
   */
  lon: YandexNavigatorCoordinate

  /**
   * Map zoom. Yandex documents integer values from 1 to 18.
   */
  zoom?: number | string

  /**
   * Hide the placemark when set to `1`; show it when set to `0`.
   */
  'no-balloon'?: YandexNavigatorNoBalloon

  /**
   * Text shown in the popup field. Yandex Navigator shows the object address by default.
   */
  desc?: string
}
