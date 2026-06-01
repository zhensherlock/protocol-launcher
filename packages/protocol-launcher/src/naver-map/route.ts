import { naverMapUrl, routePointParams } from './shared'
import type { NaverMapRoute } from './types'

/**
 * Open NAVER Map route search.
 *
 * @param payload Route payload.
 * @returns NAVER Map route URL.
 * @example
 * route({ mode: 'car', dlat: 37.5209436, dlng: 127.1230074, dname: 'Olympic Park', appname: 'com.example.myapp' })
 * // => 'nmap://route/car?dlat=37.5209436&dlng=127.1230074&dname=Olympic%20Park&appname=com.example.myapp'
 * @link https://guide.ncloud-docs.com/docs/maps-url-scheme
 */
export function route(payload: NaverMapRoute) {
  const { mode, appname, ...points } = payload

  return naverMapUrl(`route/${mode}`, {
    ...routePointParams(points),
    appname,
  })
}
