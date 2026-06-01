import { kakaoMapUrl } from './shared'
import type { KakaoMapLook } from './types'

/**
 * Open Kakao Map at a specific coordinate.
 *
 * @param payload Look payload.
 * @returns Kakao Map look URL.
 * @example
 * look({ p: '37.3952969470752,127.110449292622' })
 * // => 'kakaomap://look?p=37.3952969470752%2C127.110449292622'
 * @link https://apis.map.kakao.com/ios_v2/docs/getting-started/urlscheme/
 */
export function look(payload: KakaoMapLook) {
  const { scheme, p } = payload

  return kakaoMapUrl('look', { p }, scheme)
}
