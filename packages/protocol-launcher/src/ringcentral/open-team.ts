import { ringCentralMobileUrl } from './shared'

export type OpenTeam = {
  /**
   * RingCentral Team Messaging team ID.
   *
   * @example 'team-123'
   */
  teamId: string
}

/**
 * Open a specific team chat in the RingCentral mobile app.
 *
 * @param payload RingCentral team payload.
 * @returns RingCentral mobile team chat URI.
 * @example
 * openTeam({ teamId: 'team-123' })
 * // => 'rcmobile://glip/team?id=team-123'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function openTeam(payload: OpenTeam) {
  return ringCentralMobileUrl('glip/team', {
    id: payload.teamId,
  })
}
