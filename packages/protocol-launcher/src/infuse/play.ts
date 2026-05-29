import type { InfuseMediaPayload } from './shared'
import { infuseXCallbackUrl } from './shared'

export type Play = InfuseMediaPayload

/**
 * Play one or more videos in Infuse.
 *
 * @param payload Infuse playback payload.
 * @returns Infuse play URL.
 * @example
 * play({ url: 'https://files.firecore.com/infuse/sample-5s-360p.mp4' })
 * // => 'infuse://x-callback-url/play?url=https%3A%2F%2Ffiles.firecore.com%2Finfuse%2Fsample-5s-360p.mp4'
 * @link https://support.firecore.com/hc/en-us/articles/215090997-API-for-Third-Party-Apps-Services
 */
export function play(payload: Play) {
  return infuseXCallbackUrl('play', payload)
}
