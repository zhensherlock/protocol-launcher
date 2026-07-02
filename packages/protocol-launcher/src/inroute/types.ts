import type { InRouteGeo, InRouteReturnPayload } from './shared'

export type { InRouteGeo } from './shared'

export interface InRouteCoordinateLocation {
  /**
   * Pin name serialized as the first part of the documented `loc` value.
   *
   * @example 'Lazy K’s'
   */
  name: string
  /**
   * Pin latitude.
   *
   * @example 47.648434
   */
  latitude: string | number
  /**
   * Pin longitude.
   *
   * @example -121.914307
   */
  longitude: string | number
}

export interface InRouteSearchLocation {
  /**
   * Pin name serialized as the first part of the documented `loc` value.
   *
   * @example 'Greek Food'
   */
  name: string
  /**
   * Address or place name used to find the location.
   *
   * @example 'Lazy K’, Carnation WA 98014'
   */
  search: string
}

export interface InRouteCoordinatesPayload extends InRouteReturnPayload {
  /**
   * Locations serialized as repeated `loc={name}/{latitude}/{longitude}` parameters.
   */
  locations: readonly InRouteCoordinateLocation[]
  /**
   * When true, serializes the documented `action=opt` parameter before the location list.
   */
  optimize?: boolean
}

export interface InRouteSearchPayload extends InRouteReturnPayload {
  /**
   * Locations serialized as repeated `loc={name}/{search term}` parameters.
   */
  locations: readonly InRouteSearchLocation[]
  /**
   * When true, serializes the documented `action=opt` parameter before the location list.
   */
  optimize?: boolean
}

export interface InRoutePinPayload extends InRouteReturnPayload {
  /**
   * Pin coordinates formatted as "latitude,longitude".
   *
   * @example '48.8582,2.2946'
   */
  geo: InRouteGeo
}
