import { teamsPathSegment, teamsUrl } from './shared'

/**
 * Microsoft Teams team payload definition.
 */
type OpenTeam = {
  /**
   * Channel ID of the conversation.
   */
  channelId: string

  /**
   * Microsoft 365 group ID.
   */
  groupId: string

  /**
   * Microsoft Entra tenant ID.
   */
  tenantId: string
}

/**
 * Navigate to a Microsoft Teams team.
 *
 * @param payload - Teams team payload.
 * @returns Microsoft Teams team deep link.
 * @example
 * openTeam({
 *   channelId: '19:TWLPKo8lD4v8zDxyw4FnDYY-ovnBJG5CSjmrHUAoOz41@thread.tacv2',
 *   groupId: '72602e12-78ac-474c-99d6-f619710353a9',
 *   tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
 * })
 * // => 'https://teams.microsoft.com/l/team/19%3ATWLPKo8lD4v8zDxyw4FnDYY-ovnBJG5CSjmrHUAoOz41%40thread.tacv2/conversations?groupId=72602e12-78ac-474c-99d6-f619710353a9&tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee'
 * @link https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-teams#deep-link-to-navigate-to-a-team
 */
export function openTeam(payload: OpenTeam) {
  const { channelId, groupId, tenantId } = payload

  return teamsUrl(`team/${teamsPathSegment(channelId)}/conversations`, {
    groupId,
    tenantId,
  })
}
