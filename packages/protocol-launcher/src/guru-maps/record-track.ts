import { guruUrl } from './shared'
import type { GuruMapsRecordTrack } from './types'

/**
 * Start, stop, or toggle track recording in Guru Maps.
 *
 * @param payload Track recording payload.
 * @returns Guru Maps track recording URL.
 * @example
 * recordTrack({ action: 'start' })
 * // => 'guru://recordTrack?action=start'
 * @link https://gurumaps.app/docs/manual/guru-api#startstoptoggle-track-recording
 */
export function recordTrack(payload: GuruMapsRecordTrack = {}) {
  return guruUrl('recordTrack', {
    action: payload.action,
  })
}
