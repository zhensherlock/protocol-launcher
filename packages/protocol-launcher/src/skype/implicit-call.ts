import type { SkypeAudioParticipantList } from './shared'
import { skypeParticipantList } from './shared'

export type ImplicitCall = SkypeAudioParticipantList

/**
 * Start an implicit Skype audio call.
 *
 * @param payload Skype implicit audio call payload.
 * @returns Skype implicit audio call URL.
 * @example
 * implicitCall({
 *   participants: 'skype.test.user.1',
 * })
 * // => 'skype:skype.test.user.1'
 * @link https://learn.microsoft.com/en-us/skype-sdk/skypeuris/skypeuriapireference#audio-callimplicit
 */
export function implicitCall(payload: ImplicitCall) {
  const { participants } = payload

  return `skype:${skypeParticipantList(participants)}`
}
