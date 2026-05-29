import type { InfuseMediaPayload } from './shared'
import { infuseXCallbackUrl } from './shared'

export interface Save extends InfuseMediaPayload {
  /**
   * 0 saves the link only; 1 saves the link and begins downloading.
   */
  download?: 0 | 1
}

/**
 * Save one or more video links in Infuse for playback and optional download.
 *
 * @param payload Infuse save payload.
 * @returns Infuse save URL.
 * @example
 * save({
 *   url: 'https://files.firecore.com/infuse/sample-5s-360p.mp4',
 *   download: 0,
 * })
 * // => 'infuse://x-callback-url/save?url=https%3A%2F%2Ffiles.firecore.com%2Finfuse%2Fsample-5s-360p.mp4&download=0'
 * @link https://support.firecore.com/hc/en-us/articles/215090997-API-for-Third-Party-Apps-Services
 */
export function save(payload: Save) {
  const { download, ...mediaPayload } = payload

  return infuseXCallbackUrl('save', mediaPayload, { download })
}
