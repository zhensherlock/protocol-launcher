import { kakaoMapUrl } from './shared'
import type { KakaoMapPlace } from './types'

/**
 * Open a Kakao Map place by place ID.
 *
 * @param payload Place payload.
 * @returns Kakao Map place URL.
 * @example
 * place({ id: '18577297' })
 * // => 'kakaomap://place?id=18577297'
 * @link https://apis.map.kakao.com/ios_v2/docs/getting-started/urlscheme/
 */
export function place(payload: KakaoMapPlace) {
  const { scheme, id } = payload

  return kakaoMapUrl('place', { id }, scheme)
}
