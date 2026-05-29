import type { SkypeNameParticipantList } from './shared'
import { skypeActionUrl } from './shared'

export type VideoCall = SkypeNameParticipantList

/**
 * Start a Skype video call.
 *
 * @param payload Skype video call payload.
 * @returns Skype video call URL.
 * @example
 * videoCall({
 *   participants: 'skype.test.user.1',
 * })
 * // => 'skype:skype.test.user.1?call&video=true'
 * @link https://learn.microsoft.com/en-us/skype-sdk/skypeuris/skypeuriapireference#video-call
 */
export function videoCall(payload: VideoCall) {
  const { participants } = payload

  return skypeActionUrl('call', participants, { video: true })
}
