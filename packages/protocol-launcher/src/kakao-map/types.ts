export type KakaoMapScheme = 'app' | 'mobileWeb'

export type KakaoMapOpenPage = 'placeSearch' | 'routeSearch' | 'locationsharing'

export type KakaoMapLayer = 'skyview' | 'bike' | 'traffic' | 'hyperaccuratebus' | 'airinfo' | 'cctv'

export type KakaoMapRouteBy = 'car' | 'publictransit' | 'foot' | 'bicycle'

export type KakaoMapSchemePayload = {
  /**
   * Link target. Defaults to the native Kakao Map URL scheme.
   */
  scheme?: KakaoMapScheme
}

export type KakaoMapOpen =
  | (KakaoMapSchemePayload & {
      /**
       * Kakao Map page to open.
       */
      page?: KakaoMapOpenPage

      layer?: never
    })
  | (KakaoMapSchemePayload & {
      page?: never

      /**
       * Kakao Map layer to show.
       */
      layer: KakaoMapLayer
    })

export type KakaoMapLook = KakaoMapSchemePayload & {
  /**
   * Latitude and longitude, formatted as "latitude,longitude".
   */
  p: string
}

export type KakaoMapPlace = KakaoMapSchemePayload & {
  /**
   * Kakao Map place ID.
   */
  id: string
}

export type KakaoMapSearch = KakaoMapSchemePayload & {
  /**
   * Search keyword.
   */
  q: string

  /**
   * Search center latitude and longitude, formatted as "latitude,longitude".
   */
  p: string
}

export type KakaoMapRoute = KakaoMapSchemePayload & {
  /**
   * Starting point latitude and longitude, formatted as "latitude,longitude".
   */
  sp: string

  /**
   * First waypoint latitude and longitude, formatted as "latitude,longitude".
   */
  vp?: string

  /**
   * Second waypoint latitude and longitude, formatted as "latitude,longitude".
   */
  vp2?: string

  /**
   * Third waypoint latitude and longitude, formatted as "latitude,longitude".
   */
  vp3?: string

  /**
   * Fourth waypoint latitude and longitude, formatted as "latitude,longitude".
   */
  vp4?: string

  /**
   * Fifth waypoint latitude and longitude, formatted as "latitude,longitude".
   */
  vp5?: string

  /**
   * Destination latitude and longitude, formatted as "latitude,longitude".
   */
  ep: string

  /**
   * Routing mode.
   */
  by: KakaoMapRouteBy
}

export type KakaoMapRoadView = KakaoMapSchemePayload & {
  /**
   * Road View latitude and longitude, formatted as "latitude,longitude".
   */
  p: string
}
