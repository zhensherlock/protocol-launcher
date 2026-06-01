import { naverMapUrl } from './shared'
import type { NaverMapOpenMap } from './types'

/**
 * Open NAVER Map.
 *
 * @param payload Map payload.
 * @returns NAVER Map URL.
 * @example
 * openMap({ appname: 'com.example.myapp', lat: 37.56661, lng: 126.978388, zoom: 13 })
 * // => 'nmap://map?lat=37.56661&lng=126.978388&zoom=13&appname=com.example.myapp'
 * @link https://guide.ncloud-docs.com/docs/maps-url-scheme
 */
export function openMap(payload: NaverMapOpenMap) {
  const { appname, lat, lng, zoom } = payload

  return naverMapUrl('map', {
    lat,
    lng,
    zoom,
    appname,
  })
}
