import type { SkypeNameParticipantList, SkypeTopic } from './shared'
import { skypeActionUrl } from './shared'

export type Chat = SkypeNameParticipantList & SkypeTopic

/**
 * Open or create a Skype chat.
 *
 * @param payload Skype chat payload.
 * @returns Skype chat URL.
 * @example
 * chat({
 *   participants: 'skype.test.user.1',
 * })
 * // => 'skype:skype.test.user.1?chat'
 * @example
 * chat({
 *   participants: ['skype.test.user.1', 'skype.test.user.2'],
 *   topic: 'Quantum Mechanics 101',
 * })
 * // => 'skype:skype.test.user.1;skype.test.user.2?chat&topic=Quantum%20Mechanics%20101'
 * @link https://learn.microsoft.com/en-us/skype-sdk/skypeuris/skypeuriapireference#opencreate-chat
 */
export function chat(payload: Chat) {
  const { participants, topic } = payload

  return skypeActionUrl('chat', participants, { topic })
}
