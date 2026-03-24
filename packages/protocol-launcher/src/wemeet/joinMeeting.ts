import { qs } from '@protocol-launcher/shared'

/**
 * Join meeting payload definition.
 */
type JoinMeeting = {
  /**
   * Meeting code to join.
   *
   * @example '123456789'
   */
  meetingCode: string
}

/**
 * Join a meeting with meeting code in WeMeet.
 *
 * @param payload Join meeting definition.
 * @returns WeMeet join meeting URL.
 * @example
 * joinMeeting({
 *   meetingCode: '123456789',
 * })
 * // => 'wemeet://page/inmeeting?meeting_code=123456789'
 */
export function joinMeeting(payload: JoinMeeting) {
  const { meetingCode } = payload
  const params = qs({
    meeting_code: meetingCode,
  })

  return `wemeet://page/inmeeting${params}`
}
