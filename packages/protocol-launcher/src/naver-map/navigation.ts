import { naverMapUrl, routePointParams } from './shared'
import type { NaverMapNavigation } from './types'

/**
 * Open NAVER Map navigation.
 *
 * @param payload Navigation payload.
 * @returns NAVER Map navigation URL.
 * @example
 * navigation({ appname: 'com.example.myapp' })
 * // => 'nmap://navigation?&appname=com.example.myapp'
 * @link https://guide.ncloud-docs.com/docs/maps-url-scheme
 */
export function navigation(payload: NaverMapNavigation) {
  const { appname, ...points } = payload

  return naverMapUrl('navigation', {
    ...routePointParams(points),
    appname,
  })
}
