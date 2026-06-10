import { ringCentralAppUrl, ringCentralPath } from './shared'

export type OpenWebGroup = {
  /**
   * RingCentral group ID.
   *
   * @example 'group-123'
   */
  groupId: string
}

/**
 * Open a group chat in the RingCentral web app.
 *
 * @param payload RingCentral web group payload.
 * @returns RingCentral web group deep link.
 * @example
 * openWebGroup({ groupId: 'group-123' })
 * // => 'https://app.ringcentral.com/group/group-123'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function openWebGroup(payload: OpenWebGroup) {
  return ringCentralAppUrl(ringCentralPath('group', payload.groupId))
}
