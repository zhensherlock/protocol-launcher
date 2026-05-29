import type { SkypeAudioParticipantList, SkypeTopic } from './shared'
import { skypeActionUrl } from './shared'

export type Call = SkypeAudioParticipantList & SkypeTopic

/**
 * Start an explicit Skype audio call.
 *
 * @param payload Skype audio call payload.
 * @returns Skype audio call URL.
 * @example
 * call({
 *   participants: 'skype.test.user.1',
 * })
 * // => 'skype:skype.test.user.1?call'
 * @example
 * call({
 *   participants: ['skype.test.user.1', 'skype.test.user.2', '+16505550123'],
 *   topic: 'Geek Conspiracy',
 * })
 * // => 'skype:skype.test.user.1;skype.test.user.2;+16505550123?call&topic=Geek%20Conspiracy'
 * @link https://learn.microsoft.com/en-us/skype-sdk/skypeuris/skypeuriapireference#audio-callexplicit
 */
export function call(payload: Call) {
  const { participants, topic } = payload

  return skypeActionUrl('call', participants, { topic })
}
