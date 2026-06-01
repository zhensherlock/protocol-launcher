import { naverMapUrl } from './shared'
import type { NaverMapShowPoint } from './types'

/**
 * Show a point marker in NAVER Map.
 *
 * @param payload Point marker payload.
 * @returns NAVER Map marker URL.
 * @example
 * showPoint({ lat: 37.56661, lng: 126.978388, name: 'Seoul City Hall', appname: 'com.example.myapp' })
 * // => 'nmap://place?lat=37.56661&lng=126.978388&name=Seoul%20City%20Hall&appname=com.example.myapp'
 * @link https://guide.ncloud-docs.com/docs/maps-url-scheme
 */
export function showPoint(payload: NaverMapShowPoint) {
  const { lat, lng, name, appname } = payload

  return naverMapUrl('place', {
    lat,
    lng,
    name,
    appname,
  })
}
