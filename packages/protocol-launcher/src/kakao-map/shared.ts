import { qs } from '@protocol-launcher/shared'
import type { KakaoMapRoute, KakaoMapScheme } from './types'

type KakaoMapAction = 'open' | 'look' | 'place' | 'search' | 'route' | 'roadView'
type MobileWebProtocol = 'http' | 'https'

export function kakaoMapUrl(
  action: KakaoMapAction,
  params: Record<string, unknown> = {},
  scheme: KakaoMapScheme = 'app',
  mobileWebProtocol: MobileWebProtocol = 'http',
) {
  const base = scheme === 'app' ? 'kakaomap://' : `${mobileWebProtocol}://m.map.kakao.com/scheme/`

  return `${base}${action}${qs(params)}`
}

export function assertSupportedRoute(payload: KakaoMapRoute) {
  if (payload.by !== 'publictransit') return

  const hasWaypoint =
    payload.vp !== undefined ||
    payload.vp2 !== undefined ||
    payload.vp3 !== undefined ||
    payload.vp4 !== undefined ||
    payload.vp5 !== undefined

  if (hasWaypoint) {
    throw new Error('Kakao Map public transit routes do not support waypoints.')
  }
}
