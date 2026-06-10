import { ringCentralAppUrl } from './shared'

export type OpenWebTeamMessage = {
  /**
   * RingCentral team ID.
   *
   * @example 'team-123'
   */
  teamId: string

  /**
   * RingCentral message ID.
   *
   * @example 'message-123'
   */
  messageId: string
}

/**
 * Open a message within a specific team chat in the RingCentral web app.
 *
 * @param payload RingCentral web team message payload.
 * @returns RingCentral web team message deep link.
 * @example
 * openWebTeamMessage({ teamId: 'team-123', messageId: 'message-123' })
 * // => 'https://app.ringcentral.com/message?teamId=team-123&messageId=message-123'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function openWebTeamMessage(payload: OpenWebTeamMessage) {
  return ringCentralAppUrl('message', {
    teamId: payload.teamId,
    messageId: payload.messageId,
  })
}
