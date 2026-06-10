import { ringCentralAppUrl } from './shared'

export type OpenWebTeamChat = {
  /**
   * RingCentral group ID used by the documented `groupid` query parameter.
   *
   * @example 'group-123'
   */
  groupId: string
}

/**
 * Open a team chat in the RingCentral web app.
 *
 * @param payload RingCentral web team chat payload.
 * @returns RingCentral web team chat deep link.
 * @example
 * openWebTeamChat({ groupId: 'group-123' })
 * // => 'https://app.ringcentral.com/chat/r?groupid=group-123'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function openWebTeamChat(payload: OpenWebTeamChat) {
  return ringCentralAppUrl('chat/r', {
    groupid: payload.groupId,
  })
}
