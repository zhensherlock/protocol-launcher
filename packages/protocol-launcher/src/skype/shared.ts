import { qs } from '@protocol-launcher/shared'

export type SkypeParticipants = string | string[]

export type SkypeAudioParticipantList = {
  /**
   * Skype Names or phone numbers.
   */
  participants: SkypeParticipants
}

export type SkypeNameParticipantList = {
  /**
   * Skype Names.
   */
  participants: SkypeParticipants
}

export type SkypeTopic = {
  /**
   * Conference call or multi chat topic.
   */
  topic?: string
}

export function skypeParticipantList(participants: SkypeParticipants) {
  return Array.isArray(participants) ? participants.join(';') : participants
}

export function skypeActionUrl(
  action: 'call' | 'chat',
  participants: SkypeParticipants,
  params: Record<string, unknown> = {},
) {
  const query = qs(params).replace('?', '&')

  return `skype:${skypeParticipantList(participants)}?${action}${query}`
}
