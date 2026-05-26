import { teamsPathSegment, teamsUrl } from './shared'

/**
 * Microsoft Teams channel payload definition.
 */
type OpenChannel = {
  /**
   * Channel ID of the conversation.
   */
  channelId: string

  /**
   * Name of the team's channel.
   */
  channelName: string

  /**
   * Microsoft 365 group ID.
   */
  groupId: string

  /**
   * Microsoft Entra tenant ID.
   */
  tenantId: string

  /**
   * Indicates a next-generation channel. Required by Microsoft for private channels.
   */
  ngc?: true

  /**
   * Indicates a channel that can be accessed across tenant boundaries.
   * Required by Microsoft for shared channels.
   */
  allowXTenantAccess?: true
}

/**
 * Navigate to a Microsoft Teams channel.
 *
 * @param payload - Teams channel payload.
 * @returns Microsoft Teams channel deep link.
 * @example
 * openChannel({
 *   channelId: '19:9be3de4e70874c71a608dee9ba803ed3@thread.tacv2',
 *   channelName: 'My example channel',
 *   groupId: '72602e12-78ac-474c-99d6-f619710353a9',
 *   tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
 * })
 * // => 'https://teams.microsoft.com/l/channel/19%3A9be3de4e70874c71a608dee9ba803ed3%40thread.tacv2/My%20example%20channel?groupId=72602e12-78ac-474c-99d6-f619710353a9&tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee'
 * @link https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-teams#deep-link-to-navigate-to-channel
 */
export function openChannel(payload: OpenChannel) {
  const { channelId, channelName, groupId, tenantId, ngc, allowXTenantAccess } = payload

  return teamsUrl(`channel/${teamsPathSegment(channelId)}/${teamsPathSegment(channelName)}`, {
    groupId,
    tenantId,
    ngc,
    allowXTenantAccess,
  })
}
