import { type HotTubPlayPayload, hotTubUrl } from './shared'

/**
 * Direct playback of a specific video in Hot Tub.
 *
 * @param payload Play payload.
 * @returns Hot Tub play URL.
 * @example
 * play({ video: 'https://www.youtube.com/watch?v=y0sF5xhGreA' })
 * // => 'hottub://play?video=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy0sF5xhGreA'
 * @link https://docs.hottubapp.io/developers/url-schemes/
 */
export function play(payload: HotTubPlayPayload) {
  const { video, url } = payload

  return hotTubUrl('play', {
    video,
    url,
  })
}
