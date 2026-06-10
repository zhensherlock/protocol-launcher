import { ringCentralPath, ringCentralVideoUrl } from './shared'

export type JoinVideo = {
  /**
   * RingCentral Video meeting ID.
   *
   * @example '123456789'
   */
  meetingId: string

  /**
   * Optional meeting password to prefill.
   *
   * @example 'passcode'
   */
  password?: string
}

/**
 * Open a RingCentral Video meeting.
 *
 * @param payload RingCentral Video meeting payload.
 * @returns RingCentral Video meeting join URL.
 * @example
 * joinVideo({ meetingId: '123456789' })
 * // => 'https://v.ringcentral.com/join/123456789'
 * @example
 * joinVideo({ meetingId: '123456789', password: 'passcode' })
 * // => 'https://v.ringcentral.com/join/123456789?pw=passcode'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function joinVideo(payload: JoinVideo) {
  return ringCentralVideoUrl(ringCentralPath('join', payload.meetingId), {
    pw: payload.password,
  })
}
