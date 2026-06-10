import { ringCentralAppUrl } from './shared'

export type OpenWebInvitation = {
  /**
   * RingCentral inviter group ID.
   *
   * @example 'group-123'
   */
  groupId: string

  /**
   * RingCentral inviter email.
   *
   * @example 'member@example.com'
   */
  email: string
}

/**
 * Open a RingCentral web app chat invitation from a specified user.
 *
 * @param payload RingCentral invitation payload.
 * @returns RingCentral web invitation deep link.
 * @example
 * openWebInvitation({ groupId: 'group-123', email: 'member@example.com' })
 * // => 'https://app.ringcentral.com/invitation/r?inviter_group_id=group-123&inviter_email=member%40example.com'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function openWebInvitation(payload: OpenWebInvitation) {
  return ringCentralAppUrl('invitation/r', {
    inviter_group_id: payload.groupId,
    inviter_email: payload.email,
  })
}
