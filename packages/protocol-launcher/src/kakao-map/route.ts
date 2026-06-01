import { assertSupportedRoute, kakaoMapUrl } from './shared'
import type { KakaoMapRoute } from './types'

/**
 * Open Kakao Map route planning.
 *
 * Public transit routes do not support waypoints in Kakao's documented URL scheme.
 *
 * @param payload Route payload.
 * @returns Kakao Map route URL.
 * @example
 * route({ sp: '37.39529,127.11044', ep: '37.49795,127.02763', by: 'car' })
 * // => 'kakaomap://route?sp=37.39529%2C127.11044&ep=37.49795%2C127.02763&by=car'
 * @link https://apis.map.kakao.com/ios_v2/docs/getting-started/urlscheme/
 */
export function route(payload: KakaoMapRoute) {
  assertSupportedRoute(payload)

  const { scheme, sp, vp, vp2, vp3, vp4, vp5, ep, by } = payload

  return kakaoMapUrl(
    'route',
    {
      sp,
      vp,
      vp2,
      vp3,
      vp4,
      vp5,
      ep,
      by,
    },
    scheme,
  )
}
